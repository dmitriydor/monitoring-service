import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationDetailsComponent} from './application-details/application-details.component';
import {ApplicationListComponent} from './application-list/application-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'application'},
  {path: 'application/:id', component: ApplicationDetailsComponent},
  {path: 'application', component: ApplicationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
