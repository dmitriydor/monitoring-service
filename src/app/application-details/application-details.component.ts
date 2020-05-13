import { Component, OnDestroy } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationViewModel } from '../models/application-view-model.model';
import {distinctUntilChanged, flatMap, map, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.less']
})
export class ApplicationDetailsComponent implements OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();
  refresh$: Subject<string> = new Subject<string>();
  application: ApplicationViewModel;
  displayedColumns: string[] = ['date', 'eventName', 'description'];

  constructor(private applicationService: ApplicationService,
              private route: ActivatedRoute,
              private eventService: EventService) {
    this.refresh$
      .pipe(
        takeUntil(this.destroy$),
        flatMap(id => this.applicationService.loadById(id)))
      .subscribe((app: ApplicationViewModel) => this.application = app);
    this.route.params.pipe(
        distinctUntilChanged(),
        map(params => params.id),
        takeUntil(this.destroy$))
      .subscribe(this.refresh$);
  }
  deleteApplicationEvents(id: string) {
    this.eventService.deleteAllEventsByApplicationId(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe( () => this.refresh$.next(id));
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
