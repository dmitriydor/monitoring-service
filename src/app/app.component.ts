import { Component } from '@angular/core';

class Item{
  userName:string;
  statisticsDate:string;
  appVersion:string;
  operationSystem:string;
  
  constructor(userName:string, statisticsDate:string, appVersion:string, operationSystem:string) {
    this.userName = userName;
    this.statisticsDate = statisticsDate;
    this.appVersion = appVersion;
    this.operationSystem = operationSystem;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'monitoring-service';
  items: Item[] = 
    [
      { userName: "Dmitriy Doronin", statisticsDate: new Date().toLocaleString(), appVersion: "2.2.4", operationSystem: "android" },
      { userName: "Dmitriy Doronin", statisticsDate: new Date().toLocaleString(), appVersion: "2.2.4", operationSystem: "android" },
      { userName: "Dmitriy Doronin", statisticsDate: new Date().toLocaleString(), appVersion: "2.2.4", operationSystem: "android" },
      { userName: "Dmitriy Doronin", statisticsDate: new Date().toLocaleString(), appVersion: "2.2.4", operationSystem: "android" },
      { userName: "Dmitriy Doronin", statisticsDate: new Date().toLocaleString(), appVersion: "2.2.4", operationSystem: "android" },
    ];
}
