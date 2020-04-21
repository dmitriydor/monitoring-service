import {Component, Input, OnInit} from '@angular/core';
import {ApplicationViewModel} from "../models/application-view-model.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.less']
})
export class ApplicationListComponent {

  @Input() tableSource: ApplicationViewModel[];
  selectedApp: ApplicationViewModel;
  displayedColumns: string[] = ['userName','date','appVersion','operationSystem'];
  constructor(private router:Router) {}

  select(application: ApplicationViewModel){
    this.selectedApp = application;
    this.router.navigate(['/identification', application.id]);
  }

}
