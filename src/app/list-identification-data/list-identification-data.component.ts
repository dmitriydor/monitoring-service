import { Component, OnInit } from '@angular/core';
import { IdentificationData } from '../../models/identificationData'
import { HttpService } from '../http.service';
import { DisplayData } from 'src/models/displayData';
@Component({
  selector: 'app-list-identification-data',
  templateUrl: './list-identification-data.component.html',
  styleUrls: ['./list-identification-data.component.less'],
  providers: [HttpService]
})
export class ListIdentificationDataComponent implements OnInit {
  
  identificationData: Set<DisplayData> = new Set<DisplayData>();
  displayedColumns: string[] = ['userName','date','appVersion','operationSystem'];
  
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe((data:IdentificationData[]) => {
      for(let item of data){
        this.identificationData.add({
          userName: item.userName,
          date: new Date().toLocaleString(),
          operationSystem: item.operationSystem,
          appVersion: item.appVersion
        });
      }
    });
  }
  /*ngOnInit(): void {
    this.httpService.getData().subscribe((data:IdentificationData[]) => this.identificationData = data);
  }*/

}
