import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ApplicationService } from './services/application.service';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
