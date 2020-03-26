import { Component, OnInit } from '@angular/core';
import { Identification } from '../../models/identification'
import { HttpService } from '../http.service';
import { Display } from 'src/models/display';
import { map,tap } from 'rxjs/operators'
import { pipe } from 'rxjs';
@Component({
  selector: 'app-list-identification-data',
  templateUrl: './list-identification-data.component.html',
  styleUrls: ['./list-identification-data.component.less'],
  providers: [HttpService]
})
export class ListIdentificationDataComponent implements OnInit {
  
  identificationData: Display[] = [];
  displayedColumns: string[] = ['userName','date','appVersion','operationSystem'];
  
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData()
    .subscribe((data:Identification[]) => {
      this.identificationData = data.map(item => {
        return {
          date:new Date(item.date).toLocaleString(), 
          userName:item.userName, 
          appVersion:item.appVersion, 
          operationSystem:item.operationSystem
        }
      });
    });
  }
}
