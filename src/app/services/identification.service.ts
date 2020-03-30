import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identification } from 'src/app/models/identification.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IdentificationViewModel } from 'src/app/models/identification-view-model.model';
@Injectable()
export class IdentificationService {

  constructor(private http: HttpClient) { }
  
  loadAll(): Observable<IdentificationViewModel[]> {
    return this.http.get<Identification[]>('../assets/identificationData.json')
    .pipe(map((data: IdentificationViewModel[]) => data.map(item => {
      return {
        date: new Date(item.date).toLocaleString(),
        userName: item.userName,
        appVersion: item.appVersion,
        operationSystem: item.operationSystem
       };
      })));
  }
}