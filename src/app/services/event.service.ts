import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApplicationEventDescriptionModel } from '../models/application-event-description.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private appPath = `${environment.baseUrl}application`;
  private eventsPath = `${environment.baseUrl}events`
  constructor(private http: HttpClient) { }
  deleteAllEventsByApplicationId(appId: string): Observable<void> {
    return  this.http.delete<void>(`${this.appPath}/${appId}/events`);
  }
  loadEventDescriptions(): Observable<ApplicationEventDescriptionModel[]> {
    return this.http.get(`${this.eventsPath}/descriptions`)
      .pipe(map((data: ApplicationEventDescriptionModel[]) => data.map(item => {
        return {
        eventName: item.eventName,
        description: item.description };
        })));
  }
  saveEventDescriptions(events: ApplicationEventDescriptionModel[]) {
    return this.http.post(`${this.eventsPath}/descriptions`, events);
  }
}
