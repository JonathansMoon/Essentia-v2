import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseURL = 'http://localhost/api/';
  constructor(private http: HttpClient) {}

  Api(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const url = this.baseURL + api;
    return this.http
      .post(url, JSON.stringify(dados), httpOptions)
      .map((res) => res);
  }
}
