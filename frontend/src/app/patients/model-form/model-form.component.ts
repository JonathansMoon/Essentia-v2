import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponsePatients } from '../patient.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PatientService } from '../patient.service';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css'],
})
export class ModelFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  messages:string;
  responsePatients: ResponsePatients;

  @Input() onHide: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: PatientService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      name: [
        null,
        [
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(150),
          ]),
        ],
      ],
      email: [null, Validators.compose([Validators.email])],
      telephone: [
        null,
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(11),
        ]),
      ],
      gender: ['M'],
      birthDate: [null, Validators.compose([Validators.required])],
      lastAttendance: [null, Validators.compose([Validators.required])],
    });
  }


  onEdit(patient) {
    const patientId$ = this.service.getById(patient.id);

    patientId$.subscribe(
      patientId => {
        this.updateForm(patientId)
      }
    )
  }

  updateForm(patient): void {
    this.form.patchValue({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      birthDate: patient.birthDate,
      lastAttendance: patient.lastAttendance,
    })
    // alert(this.form.value.name);

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

  hasErrors(field: string) {
    return this.form.get(field).errors;
  }

  isInvalid(field: string) {
    if (this.submitted && this.hasErrors(field)) return 'is-invalid';
  }

  optionalInvalid(field: string) {
    const fieldSet = this.form.get(field);
    if (
      (fieldSet.dirty || fieldSet.touched) &&
      (fieldSet.value === null || fieldSet.value === '')
    )
      return 'border border-warning';
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      const formatdate = 'yyyy-MM-dd';
      const locale = 'en-US';
      this.form.value.birthDate = formatDate(
        this.form.value.birthDate,
        formatdate,
        locale
      );

      const formatDateTime = 'yyyy-MM-dd HH:mm:ss';
      this.form.value.lastAttendance = formatDate(
        this.form.value.lastAttendance,
        formatDateTime,
        locale
      );

      this.service.createPatient(this.form.value).subscribe(
        (success) => this.showMessageSuccess(),

        (error) => this.showMessageError(Object.keys(error.error.errors).map(function(item){
          return error.error.errors[item]
         }),
      ));
    }
  }

  showMessageSuccess() {
    this.toastr.success('Paciente criado com sucesso!');
    this.onHide;
  }

  showMessageError(message) {
    this.toastr.error(message);
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
