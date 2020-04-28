import { Component, OnDestroy } from '@angular/core';
import { ApplicationService } from './services/application.service';
import { Application } from './models/application.model';
import { ApplicationViewModel } from './models/application-view-model.model';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {interval, Observable, Subject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {

  private destroyed$: Subject<boolean> = new Subject<boolean>();
  applicationList: Observable<Application[]> = new Observable<Application[]>();

  constructor(private identificationService: ApplicationService, private router: Router) {
    this.applicationList = this.identificationService.loadAll()
      .pipe(takeUntil(this.destroyed$));
  }

  onSelected(application: ApplicationViewModel) {
    this.router.navigate(['/application', application.id]);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
