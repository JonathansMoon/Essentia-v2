import { Component, OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {

  name:string;
  email:string;
  gender:string;
  telephone:string;
  birthDate:string;
  lastAttendance:string;

  modalRef: BsModalRef;
  patientDetails:string;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
