import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationDetailsComponent} from "./application-details/application-details.component";
import {ApplicationListComponent} from "./application-list/application-list.component";

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'identification'},
  {path: 'identification/:id', component: ApplicationDetailsComponent},
  {path: 'identification', component: ApplicationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
