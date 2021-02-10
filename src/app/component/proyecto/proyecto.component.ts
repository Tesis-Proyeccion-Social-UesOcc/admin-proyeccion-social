import {Component} from '@angular/core';
import {ProjectModelInterface} from '../../model/project-model-interface';
import {ProjectDataService} from '../../service/data/project-data.service';
import {PaginationInterface} from '../../model/pagination-interface';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  dataSource: ProjectModelInterface[] = [];
  pagination: PaginationInterface | undefined;

  displayedColumns: string[] = ['id', 'nombre', 'duracion', 'interno', 'personal'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(private projectProvider: ProjectDataService) {
    this.projectProvider.getProjets(0, 10).subscribe(
      (projects: PaginationInterface) => {
        this.pagination = projects;
        this.dataSource = projects.content;
        console.log('Datos de Proyectos ', this.dataSource);
      }
    );
  }


}
