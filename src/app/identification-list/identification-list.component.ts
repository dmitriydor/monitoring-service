import { Component, Input } from '@angular/core';
import { IdentificationViewModel } from '../models/identification-view-model.model'

@Component({
  selector: 'app-identification-list',
  templateUrl: './identification-list.component.html',
  styleUrls: ['./identification-list.component.less']
})
export class IdentificationListComponent {

  @Input() tableSource: IdentificationViewModel[];
  constructor() {}

}
