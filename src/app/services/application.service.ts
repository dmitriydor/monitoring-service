import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from 'src/app/models/application.model';
import { Observable } from 'rxjs';
import {flatMap, map, mergeMap, tap} from 'rxjs/operators'
import { ApplicationViewModel } from 'src/app/models/application-view-model.model';
@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }

  loadAll(): Observable<Application[]> {
    return this.http.get<Application[]>('https://localhost:5001/api/application')
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
  loadById(appId:string):Observable<ApplicationViewModel>{
    return this.http.get<ApplicationViewModel>(`https://localhost:5001/api/application/${appId}`).pipe(tap( x => console.log(x)));
  }
}
