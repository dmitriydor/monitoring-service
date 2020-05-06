import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  deleteAllEventsById(appId: string): Observable<void> {
    return  this.http.delete<void>(`https://localhost:5001/api/application/${appId}`);
  }
}
