import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePatients } from './patient.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = "http://localhost/api/patients";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getPatient(): Observable<ResponsePatients> {
    return this.http.get<ResponsePatients>(this.url);
  }
}
