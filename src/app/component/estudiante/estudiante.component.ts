import { Component, OnInit } from '@angular/core';
import {PaginationInterface} from '../../model/pagination-interface';
import {StudentDataService} from '../../service/data/student-data.service';
import {StudentModelInterface} from '../../model/student-model-interface';
import {RequirementStatusModelInterface} from '../../model/RequirementStatusModel';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {DocumentoRequerimientoModel} from '../../model/DocumentoRequerimientoModel';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  isVisible = false;
  dataSource: StudentModelInterface[] = [];
  requirementStatus: RequirementStatusModelInterface [] = [];
  servicioCompletoFlag: boolean = false;
  carnetSelected: string = '';


  pagination: PaginationInterface = {
    totalElement: 0,
    size: 0,
    currentPage: 0,
    first: true,
    totalPages: 0,
    content: 0
  };
  constructor(private studentProvider: StudentDataService, private message: NzMessageService) {
    this.findAllStudentsByStatus();
  }

  ngOnInit(): void {
  }

  findAllStudentsByStatus(): void{
    this.servicioCompletoFlag  = ! this.servicioCompletoFlag;
    let  flag: string;
    if (this.servicioCompletoFlag === true ){
      flag = 'si';
    } else {
      flag = 'no';
    }
    this.studentProvider.findAllStudents(0,10, flag).subscribe(
      (response: PaginationInterface) => {
        this.pagination = response;
        this.dataSource = response.content;
        this.dataSource.map(element => element.porcentaje = (100 * element.horasProgreso / 300).toFixed(2));
        console.log('Datos de estudiantes ', this.dataSource);
      }
    );
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  showModal(due: string = 'IR13002'): void {
    this.isVisible = true;
    this.carnetSelected = due;
    this.studentProvider.findAllEstadoRequerimientos(due).subscribe(
         (response: ServiceResponseInterface) => {
        this.requirementStatus = response.result;
        console.log('Datos de estado requerimiento ', this.requirementStatus);
      }
    );
  }

  onApproveDocument(due: string, requirementId: number): void {
    this.studentProvider.approveDocument(due, requirementId).subscribe(
      (response1: DocumentoRequerimientoModel) => {
        console.log(response1);
        this.message.create('success', `Documento Aprobado`);

        this.studentProvider.findAllEstadoRequerimientos(due).subscribe(
          (response2: ServiceResponseInterface) => {
            this.requirementStatus = response2.result;
            console.log('Datos de estado requerimiento ', this.requirementStatus);
          }
        );

      }
    , error => {

        console.error('Error al aprobar un documento ', error);
        this.message.create('error', `Error al intentar de aprobar un documento, error: ${error}`);
      }
      );
  }

}

