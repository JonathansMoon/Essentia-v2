import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './patients/patient.service';
import { PatientsComponent } from './patients/patients.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { DataTablesModule } from 'angular-datatables';

import {
  Alarm,
  AlarmFill,
  EyeFill,
  PencilFill,
  Trash2Fill,
} from 'ngx-bootstrap-icons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModelFormComponent } from './patients/model-form/model-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalViewComponent } from './patients/modal-view/modal-view.component';
import { PhonePipe } from './phone.pipe';

const icons = {
  Alarm,
  AlarmFill,
  EyeFill,
  PencilFill,
  Trash2Fill,
};

@NgModule({
  declarations: [AppComponent, PatientsComponent, ModelFormComponent, ModalViewComponent, PhonePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    DataTablesModule
  ],
  providers: [HttpClient, PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
