import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationViewModel} from '../models/application-view-model.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.less']
})
export class ApplicationListComponent {
  @Output() onSelected = new EventEmitter<ApplicationViewModel>();
  @Input() tableSource: ApplicationViewModel[];
  selectedApp: ApplicationViewModel;
  displayedColumns: string[] = ['userName', 'date', 'appVersion', 'operationSystem'];
  constructor() {}

  select(application: ApplicationViewModel) {
    this.selectedApp = application;
    this.onSelected.emit(application);
  }
}
