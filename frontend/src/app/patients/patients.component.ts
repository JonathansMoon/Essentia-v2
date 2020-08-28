import { Component, OnInit, TemplateRef } from '@angular/core';
import { PatientService } from './patient.service';
import { ResponsePatients } from './patient.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  modalRef: BsModalRef;
  responsePatients: ResponsePatients;

  constructor(
    private patientService: PatientService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.patientService
      .getPatient()
      .subscribe((res) => (this.responsePatients = res));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
