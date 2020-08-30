import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css'],
  providers: [DatePipe]
})
export class ModalViewComponent implements OnInit {

  name:string;
  email:string;
  gender:string;
  telephone:string;
  birthDate:string;
  lastAttendance:string;
  initialState:any;

  modalRef: BsModalRef;
  patientDetails:string;
  constructor(
    private modalService: BsModalService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('templateView')
  private templateViewTpl: TemplateRef<any>;



  openViewModal(patient) {

    this.initialState = {
      name: patient.name,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      birthDate: this.datePipe.transform(patient.birthDate, 'dd-MM-yyyy'),
      lastAttendance: this.datePipe.transform(patient.lastAttendance, 'dd-MM-yyyy hh:mm'),
    };

    this.modalRef =  this.modalService.show(this.templateViewTpl, this.initialState);
  }
}
