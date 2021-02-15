import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {ProjectDataService} from '../../../service/data/project-data.service';
import {PaginationInterface} from '../../../model/pagination-interface';
import {ServiceResponseInterface} from '../../../model/service-response-interface';
import {DepartamentInterface} from '../../../model/department-model-interface';
import {InternalPersonalModelInterface} from '../../../model/internal-personal-model-interface';


@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: 'agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup;
  internalPersonal: boolean = true;
  internalPersonalCombobox: boolean = true;
  departmentSelectedValue: number = 0;
  internalPersonalSelectedValue: number = 0;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  serviceResponse: ServiceResponseInterface | undefined;
  departments: DepartamentInterface [] = [];
  internalPersonalData: InternalPersonalModelInterface [] = [];

  constructor(private fb: FormBuilder, private projectProvider: ProjectDataService) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      proyecto: [null, [Validators.required]],
      duracion: [null, [Validators.required]],
      agree: [false],
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

  onRetrieveInternalPersonal(): void{
    if (this.departmentSelectedValue != null && this.departmentSelectedValue !== 0 ){
      console.log('selectedValue', this.departmentSelectedValue);
      this.projectProvider.getInternalPersonal(this.departmentSelectedValue).subscribe(
        (data: ServiceResponseInterface) => {
          this.serviceResponse = data;
          this.internalPersonalData = data.result;
          console.log('Datos de Personal Interno', this.serviceResponse);
          this.internalPersonalCombobox = false;
        }
      );
    } else {
      this.internalPersonalCombobox = true;
      this.internalPersonalData = [];
    }
    this.departmentSelectedValue = 0;
  }

  isInternalPersonal(): void{
    this.internalPersonal = !this.internalPersonal;
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
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
      controlInstance: `passenger${id}`
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
