import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { ApplicationEventDescriptionModel } from '../models/application-event-description.model';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-event-description-dialog',
  templateUrl: './edit-event-description-dialog.component.html',
  styleUrls: ['./edit-event-description-dialog.component.less']
})
export class EditEventDescriptionDialogComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  eventDescriptions: ApplicationEventDescriptionModel[];
  editedEventDescriptions: ApplicationEventDescriptionModel[] = [];
  eventName: string;
  constructor(public dialogRef: MatDialogRef<EditEventDescriptionDialogComponent>, private eventService: EventService) {
    this.eventService.loadEventDescriptions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(eventDescription => this.eventDescriptions = eventDescription);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  addEditedEvent(event: ApplicationEventDescriptionModel) {
    console.log(event);
    this.editedEventDescriptions.push(event);
  }
  editField(applicationEventName: string) {
    this.eventName = applicationEventName;
  }
  saveEventDescriptions() {
    this.eventService.saveEventDescriptions(this.editedEventDescriptions)
      .pipe(tap( x => console.log(x)), takeUntil(this.destroy$))
      .subscribe(() => this.closeDialog());
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
