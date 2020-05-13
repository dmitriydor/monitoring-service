import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from 'src/app/models/application.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ApplicationViewModel } from 'src/app/models/application-view-model.model';
import {environment} from '../../environments/environment';
@Injectable()
export class ApplicationService {
  private appPath = `${environment.baseUrl}application`;
  constructor(private http: HttpClient) { }

  loadAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.appPath)
      .pipe(map((data: ApplicationViewModel[]) => data.map(item => {
        return {
          id: item.id,
          date: new Date(item.date).toLocaleString(),
          userName: item.userName,
          appVersion: item.appVersion,
          operationSystem: item.operationSystem
        };
      })));
  }
  loadById(appId: string): Observable<ApplicationViewModel> {
    return this.http.get<ApplicationViewModel>(`${this.appPath}/${appId}`);
  }
}
