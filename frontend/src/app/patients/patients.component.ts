import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  list: any = [];
  limit = 10;
  start = 0;
  textSearch = '';
  name = '';
  email = '';
  gender = '';
  telephone = '';
  birthDate = '';
  lastAttendance = '';

  constructor(private provider: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.list = [];
    this.start = 0;
    this.carregar(this.textSearch);
  }

  carregar(text: string) {
    this.list = [];
    this.start = 0;
    return new Promise((resolve) => {
      const data = {
        request: 'list',
        limit: this.limit,
        start: this.start,
        textSearch: text,
      };

      this.provider.Api(data, 'patients').subscribe((data) => {
        for (const datas of data['result']) {
          this.list.push(datas);
        }
        resolve(true);
      });
    });
  }
}
