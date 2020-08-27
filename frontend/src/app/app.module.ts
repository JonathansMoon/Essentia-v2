import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PatientService } from './patients/patient.service';
import { PatientsComponent } from './patients/patients.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Alarm, AlarmFill, EyeFill, PencilFill, Trash2Fill } from 'ngx-bootstrap-icons';

const icons = {
  Alarm,
  AlarmFill,
  EyeFill,
  PencilFill,
  Trash2Fill
};

@NgModule({
  declarations: [AppComponent, PatientsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [HttpClient, PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
