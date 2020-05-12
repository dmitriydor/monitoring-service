import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private appPath = `${environment.baseUrl}application`;
  constructor(private http: HttpClient) { }
  deleteAllEventsByApplicationId(appId: string): Observable<void> {
    return  this.http.delete<void>(`${this.appPath}/${appId}`);
  }
}
