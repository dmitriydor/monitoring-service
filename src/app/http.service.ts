import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentificationData } from 'src/models/identificationData';
import { Observable } from 'rxjs';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  getData():Observable<IdentificationData[]> {
    return this.http.get<IdentificationData[]>('../assets/identificationData.json')
  }
}
