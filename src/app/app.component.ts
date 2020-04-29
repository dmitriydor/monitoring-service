import { Component, OnDestroy } from '@angular/core';
import { ApplicationService } from './services/application.service';
import { Application } from './models/application.model';
import { ApplicationViewModel } from './models/application-view-model.model';
import { Router } from '@angular/router';
import { filter, flatMap, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, interval,  Subject} from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  applicationData$: Subject<Application[]> = new Subject<Application[]>();
  refresh$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  checkbox$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  interval$ = this.checkbox$
    .pipe(
      flatMap(() => interval(30000)
        .pipe(
          takeUntil(this.checkbox$.pipe(filter( value => value === false))))
        ),
      takeUntil(this.destroy$)
    );



  constructor(private identificationService: ApplicationService, private router: Router) {
    this.refresh$
      .pipe(
        takeUntil(this.destroy$),
        flatMap( () => identificationService.loadAll()))
      .subscribe(this.applicationData$);
    combineLatest([this.interval$, this.checkbox$])
      .pipe(
        takeUntil(this.destroy$),
        filter(([, checked]) => checked === true),
      )
      .subscribe(this.refresh$);
  }

  onSelected(application: ApplicationViewModel) {
    this.router.navigate(['/application', application.id]);
  }

  check(event: MatCheckboxChange) {
    this.checkbox$.next(event.checked);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
