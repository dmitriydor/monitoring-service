import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { IdentificationListComponent } from './identification-list/identification-list.component';
import { IdentificationService } from './services/identification.service';
@NgModule({
  declarations: [
    AppComponent,
    IdentificationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [IdentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
