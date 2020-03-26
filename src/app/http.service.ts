import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identification } from 'src/models/identification';
import { Observable } from 'rxjs';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  getData():Observable<Identification[]> {
    return this.http.get<Identification[]>('../assets/identificationData.json')
  }
}
