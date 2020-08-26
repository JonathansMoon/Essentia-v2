import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [AppComponent, PatientsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient, ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
