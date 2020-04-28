import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationViewModel} from '../models/application-view-model.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.less']
})
export class ApplicationListComponent {

  @Input() tableSource: ApplicationViewModel[];
  @Output() onSelected = new EventEmitter<ApplicationViewModel>();
  selectedApp: ApplicationViewModel;
  displayedColumns: string[] = ['userName', 'date', 'appVersion', 'operationSystem'];
  autoUpdate = false;
  constructor() {}

  select(application: ApplicationViewModel) {
    this.selectedApp = application;
    this.onSelected.emit(application);
  }

}
