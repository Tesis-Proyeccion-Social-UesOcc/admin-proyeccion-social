import { Component, OnInit } from '@angular/core';
import {PaginationInterface} from '../../model/pagination-interface';
import {StudentDataService} from '../../service/data/student-data.service';
import {StudentModelInterface} from '../../model/student-model-interface';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  dataSource: StudentModelInterface[] = [];
  servicioCompletoFlag: boolean = false;

  pagination: PaginationInterface = {
    totalElement: 0,
    size: 0,
    currentPage: 0,
    first: true,
    totalPages: 0,
    content: 0
  };
  constructor(private studentProvider: StudentDataService) {
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

}
