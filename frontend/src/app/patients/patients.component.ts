import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { PatientService } from './patient.service';
import { ResponsePatients } from './patient.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModelFormComponent } from './model-form/model-form.component';
import { ModalViewComponent } from './modal-view/modal-view.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  name:string;
  email:string;
  gender:string;
  telephone:string;
  birthDate:string;
  lastAttendance:string;
  initialState:any;

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

  openFormModal() {
    this.modalRef = this.modalService.show(ModelFormComponent);
  }

  openViewModal(patient, templateView) {

    this.initialState = {
      name: patient.name,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      birthDate: patient.birthDate,
      lastAttendance: patient.lastAttendance,
    };

    console.log(this.initialState);
    this.modalRef =  this.modalService.show(templateView, this.initialState);

  }

}
