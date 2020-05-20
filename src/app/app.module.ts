import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationService } from './services/application.service';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { FormsModule } from '@angular/forms';
import { EditEventDescriptionDialogComponent } from './edit-event-description-dialog/edit-event-description-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent,
    EditEventDescriptionDialogComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
  ],
  entryComponents: [
    EditEventDescriptionDialogComponent
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
