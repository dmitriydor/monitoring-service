import { Component, OnDestroy } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationViewModel } from '../models/application-view-model.model';
import { distinctUntilChanged, flatMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.less']
})
export class ApplicationDetailsComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  application: ApplicationViewModel;
  displayedColumns: string[] = ['date', 'eventName', 'description'];

  constructor(private applicationService: ApplicationService, private route: ActivatedRoute) {
    this.route.params
      .pipe(
        distinctUntilChanged(),
        flatMap(params => this.applicationService.loadById(params.id)
          .pipe(takeUntil(this.destroy$))),
        takeUntil(this.destroy$))
      .subscribe(app => this.application = app);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
