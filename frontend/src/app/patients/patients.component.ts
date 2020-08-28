import { Component, OnInit, TemplateRef } from '@angular/core';
import { PatientService } from './patient.service';
import { ResponsePatients } from './patient.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  modalRef: BsModalRef;
  responsePatients: ResponsePatients;

  constructor(private patientService: PatientService, private modalService: BsModalService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.patientService.getPatient()
        .subscribe(res => this.responsePatients = res);

    this.form = this.formBuilder.group(
      {
        name: [null,[ Validators.compose(
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(150)
          ])
        ]
      ],
        email: [null, Validators.compose([Validators.email])],
        telephone: [null, Validators.compose([Validators.minLength(10), Validators.maxLength(11)])],
        birthDate: [null, Validators.compose([Validators.required])],
        lastAttendance: [null, Validators.compose([Validators.required])],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get telephone() {
    return this.form.get('telephone');
  }

  get birthDate() {
    return this.form.get('birthDate');
  }

  get lastAttendance() {
    return this.form.get('lastAttendance');
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hasErrors(field: string) {
    return this.form.get(field).errors;
  }

  isInvalid(field: string) {
    if (this.submitted && this.hasErrors(field))
    return 'is-invalid';
  }

  optionalInvalid(field: string) {
    const fieldSet = this.form.get(field);
    if ((fieldSet.dirty || fieldSet.touched) && (fieldSet.value === null || fieldSet.value === ''))
    return 'border border-warning';
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
    }

  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
