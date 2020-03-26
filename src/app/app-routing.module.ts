import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListIdentificationDataComponent } from './list-identification-data/list-identification-data.component';

const routes: Routes = [
  {path: '',component:ListIdentificationDataComponent},
  {path: 'identification', component: ListIdentificationDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
