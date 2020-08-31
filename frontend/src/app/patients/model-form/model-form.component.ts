import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponsePatients } from '../patient.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PatientService } from '../patient.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css'],
  providers: [DatePipe],
})
export class ModelFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  messages: string;
  responsePatients: ResponsePatients;
  modalRef: BsModalRef;
  initialValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: PatientService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private datePipe: DatePipe
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
      gender: ['M', Validators.compose([Validators.required])],
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

  get gender() {
    return this.form.get('email');
  }

  get birthDate() {
    return this.form.get('birthDate');
  }

  get lastAttendance() {
    return this.form.get('lastAttendance');
  }

  @ViewChild('templateForm')
  private templateFormTpl: TemplateRef<any>;

  openFormModal() {
    this.form.reset();
    this.modalRef = this.modalService.show(this.templateFormTpl);
  }

  updateForm(patient) {
    this.modalRef = this.modalService.show(this.templateFormTpl);

    this.modalRef.content = this.form;

    this.modalRef.content.patchValue({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      gender: patient.gender,
      telephone: patient.telephone,
      birthDate: patient.birthDate,
      lastAttendance: this.datePipe.transform(
        patient.lastAttendance,
        'yyyy-MM-ddThh:mm'
      ),
    });
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

    if (this.form.valid) {
      this.form.value.birthDate = this.datePipe.transform(
        this.form.value.birthDate,
        'yyyy-MM-dd'
      );

      this.form.value.lastAttendance = this.datePipe.transform(
        this.form.value.lastAttendance,
        'yyyy-MM-dd HH:mm:ss'
      );

      if (this.form.value.id !== null) {
        this.service.updatePatient(this.form.value).subscribe(
          (success) =>
            this.showMessageSuccess(
              `Paciente ${this.form.value.name} atualizado com sucesso!`
            ),

          (error) =>
            this.showMessageError(
              Object.keys(error.error.errors).map(function (item) {
                return error.error.errors[item];
              })
            )
        );
      }

      if (this.form.value.id === null) {
        this.service.createPatient(this.form.value).subscribe(
          (success) => this.showMessageSuccess('Paciente criado com sucesso!'),

          (error) =>
            this.showMessageError(
              Object.keys(error.error.errors).map(function (item) {
                return error.error.errors[item];
              })
            )
        );
      }
    }
  }

  showMessageSuccess(message) {
    this.toastr.success(message);
    this.modalRef.hide();
    window.setTimeout(function () {
      location.reload();
    }, 1000);
  }

  showMessageError(message) {
    this.toastr.error(message);
  }

  onCancel() {
    this.submitted = false;
    this.modalRef.hide();
  }
}
