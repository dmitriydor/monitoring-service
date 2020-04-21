import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../services/application.service";
import {ActivatedRoute} from "@angular/router";
import {ApplicationViewModel} from "../models/application-view-model.model";
import {distinctUntilChanged, flatMap,} from "rxjs/operators";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.less']
})
export class ApplicationDetailsComponent implements OnInit {
  application: ApplicationViewModel;
  displayedColumns: string[] = ['date', 'eventName', 'description'];

  constructor(private applicationService: ApplicationService, private route: ActivatedRoute) {
    this.route.params
      .pipe(
        distinctUntilChanged(),
        flatMap(params => this.applicationService.loadById(params['id'])))
      .subscribe(app => this.application = app);
  }

  ngOnInit(): void {}
}
