import {Component, OnInit} from '@angular/core';
import {ProjectModelInterface} from '../../model/project-model-interface';
import {ProjectDataService} from '../../service/data/project-data.service';
import {PaginationInterface} from '../../model/pagination-interface';
import {StudentModelInterface} from '../../model/student-model-interface';
import {ProjectRequestInterface} from '../../model/request/ProjectRequest';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  array = [1, 2, 3, 4];

  dataSource: ProjectModelInterface[] = [];
  studentProject: StudentModelInterface [] = [];
  isVisible = false;
  pagination: PaginationInterface = {
    totalElement: 0,
    size: 0,
    currentPage: 0,
    first: true,
    totalPages: 0,
    content: 0
  };

  displayedColumns: string[] = ['id', 'nombre', 'duracion', 'interno', 'personal'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(private projectProvider: ProjectDataService) {
    this.projectProvider.getProjets(0, 5, 1).subscribe(
      (projects: PaginationInterface) => {
        this.pagination = projects;
        this.dataSource = projects.content;
        console.log('Datos de Proyectos ', this.dataSource);
      }
    );
  }

  ngOnInit(): void {

  }
  showModal(id: number = 0): void {
    this.isVisible = true;
    this.getProjects(id);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  getProjects(idProject: number, status: number = 1): void {
    console.log('project id' + idProject);
    this.dataSource.find(proyecto =>  {
      if (proyecto.id === idProject) {
        this.studentProject = proyecto.estudiantes;
      }
    });
  }

}
