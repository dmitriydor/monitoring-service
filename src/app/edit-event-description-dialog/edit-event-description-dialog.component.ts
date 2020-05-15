import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { ApplicationEventDescriptionModel } from '../models/application-event-description.model';
import { Subject, pipe } from 'rxjs';
import { takeUntil, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-edit-event-description-dialog',
  templateUrl: './edit-event-description-dialog.component.html',
  styleUrls: ['./edit-event-description-dialog.component.less']
})
export class EditEventDescriptionDialogComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  eventDescriptions: ApplicationEventDescriptionModel[];
  editedEventDescriptions: Map<string,ApplicationEventDescriptionModel> = new Map<string,ApplicationEventDescriptionModel>();
  selectedEventName: string;
  constructor(public dialogRef: MatDialogRef<EditEventDescriptionDialogComponent>, private eventService: EventService) {
    this.eventService.loadEventDescriptions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(eventDescription => this.eventDescriptions = eventDescription);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  addEditedEvent(event: ApplicationEventDescriptionModel) {
    this.editedEventDescriptions.set(event.eventName, event);
  }
  setSelectedEventName(applicationEventName: string) {
    this.selectedEventName = applicationEventName;
  }
  saveEventDescriptions() {
    this.eventService.saveEventDescriptions(Array.from(this.editedEventDescriptions.values()))
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => this.closeDialog());
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
