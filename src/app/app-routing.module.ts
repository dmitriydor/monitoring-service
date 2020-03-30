import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { IdentificationListComponent } from './identification-list/identification-list.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'identification'},
  {path: 'identification', component: IdentificationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
