import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdentificationData } from 'src/models/identificationData';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<IdentificationData[]>('../assets/identificationData.json')
  }
}
