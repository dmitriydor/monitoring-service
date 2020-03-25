import { Component, OnInit } from '@angular/core';
import {IdentificationData} from '../../models/identificationData'
import {HttpService} from '../http.service';
@Component({
  selector: 'app-list-identification-data',
  templateUrl: './list-identification-data.component.html',
  styleUrls: ['./list-identification-data.component.less'],
  providers: [HttpService]
})
export class ListIdentificationDataComponent implements OnInit {
  identificationData: IdentificationData[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe((data:IdentificationData[]) => this.identificationData = data);
  }

}
