import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './services/application.service';
import {Application} from "./models/application.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  applicationList:Application[] = [];

  constructor(private identificationService: ApplicationService){
    this.identificationService.loadAll()
    .subscribe(data => this.applicationList = data);
  }
}
