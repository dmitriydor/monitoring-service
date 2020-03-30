import { Component, OnInit } from '@angular/core';
import { IdentificationService } from './services/identification.service';
import { IdentificationViewModel } from './models/identification-view-model.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  title = 'monitoring-service';
  identificationList:IdentificationViewModel[] = [];

  constructor(private identificationService: IdentificationService){
    this.identificationService.loadAll()
    .subscribe(data => this.identificationList = data);
  }
}
