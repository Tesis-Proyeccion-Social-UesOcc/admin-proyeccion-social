import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectDataService} from '../../../service/data/project-data.service';
import {ServiceResponseInterface} from '../../../model/service-response-interface';
import {DepartamentInterface} from '../../../model/department-model-interface';
import {InternalPersonalModelInterface} from '../../../model/internal-personal-model-interface';
import {ProjectRequestInterface} from '../../../model/request/ProjectRequest';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: 'agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  personalId: number = 0;
  isVisible = false;
  validateForm!: FormGroup;
  internalPersonal: boolean = true;
  internalPersonalCombobox: boolean = true;
  departmentSelectedValue: number = 0;
  internalPersonalSelectedValue: number = 0;
  externalPersonalSelectedValue: number = 0;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  serviceResponse: ServiceResponseInterface | undefined;
  departments: DepartamentInterface [] = [];
  internalPersonalData: InternalPersonalModelInterface [] = [];
  externalPersonalData: InternalPersonalModelInterface [] = [];
  estudiante: any[] = [];
  projectRequest: ProjectRequestInterface[] = [];
  constructor(private fb: FormBuilder, private projectProvider: ProjectDataService, private message: NzMessageService) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      proyecto: [null, [Validators.required]],
      duracion: [null, [Validators.required]],
      agree: [false],
      personal: [null, [Validators.required]]
    });
    this.addField();
  }
  showModal(): void {
    this.isVisible = true;

    this.projectProvider.getDepartments().subscribe(
      (data: ServiceResponseInterface) => {
        this.serviceResponse = data;
        this.departments = data.result;
        console.log('Datos de Departamentos', this.serviceResponse);
      }
    );
  }

  onRetrieveInternalPersonal(id: number = 0): void{
      console.log('selectedValue', id);
      this.projectProvider.getInternalPersonal(id).subscribe(
        (data: ServiceResponseInterface) => {
          this.serviceResponse = data;
          this.internalPersonalData = data.result;
          console.log('Datos de Personal Interno', this.serviceResponse);

          this.internalPersonalCombobox = false;
        }
      );
  }
  onRetrieveExternalPersonalId(id: number = 0): void{
    console.log('selectedValue', id);
    this.externalPersonalSelectedValue = id;
  }

  isInternalPersonal(): void{
    this.internalPersonal = !this.internalPersonal;
    this.projectProvider.getExternalPersonal().subscribe(
      (data: ServiceResponseInterface) => {
        this.serviceResponse = data;
        this.externalPersonalData = data.result;
        console.log('Datos de Personal Externo', this.serviceResponse);

        this.internalPersonalCombobox = false;
      }
    );
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      console.log(`valor control: ${this.validateForm.controls[i].value}`);
      if (i.includes('estudiante')) {
        this.estudiante.push(this.validateForm.controls[i].value);
      }
    }
    const dataForm = this.validateForm.value;
    console.log('dataform', dataForm);
    console.log(`Tutor  interno ${this.internalPersonalSelectedValue}; externo ${dataForm['personal']}`);
    let project: ProjectRequestInterface;

    if (dataForm['personal'] !== null && dataForm['personal'] !== 0 ) {
      this.personalId = dataForm['personal'];
      console.log('Es personal externo');
    } else {
      console.log('Es personal interno');
      this.personalId = this.internalPersonalSelectedValue;
    }

    console.log('personal id ' + this.personalId);
    project = {
      personal: this.personalId,
      nombre: this.validateForm.controls['proyecto'].value,
      duracion: this.validateForm.controls['duracion'].value,
      interno: !this.validateForm.controls['agree'].value,
      estudiantes: this.estudiante,
      id: 0
    };
    console.log(`proyect`, project);

   this.projectProvider.createProject(project).subscribe( response => {
      console.log('resultado guardar', response);
      this.message.create('success', `Proyecto Creado con exito`);
      this.isVisible = false;
      this.reset();
      this.estudiante = [];
    }, error => {
     this.estudiante = [];
     console.log('Error al guardar personas ', error);
     this.message.create('error', `Error al crear el proyecto \n ${error.message}`);
   });
  }
  reset(): void {
    this.createForm();
  }
  createForm(): void{
    this.validateForm = this.fb.group({
      proyecto: [null, [Validators.required]],
      duracion: [null, [Validators.required]],
      agree: [false],
      personal: [null, [Validators.required]]
    });
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `estudiante${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(this.listOfControl[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }
}
