import {Component, OnInit} from '@angular/core';
import {ProjectModelInterface} from '../../model/project-model-interface';
import {ProjectDataService} from '../../service/data/project-data.service';
import {PaginationInterface} from '../../model/pagination-interface';
import {StudentModelInterface} from '../../model/student-model-interface';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadChangeParam, NzUploadFile, NzUploadXHRArgs} from 'ng-zorro-antd/upload';
import {HttpClient} from '@angular/common/http';
import {ChangeStatusProjectInterface} from '../../model/ChangeStatusProjectInterface';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  array = [1, 2, 3, 4];
  uploading = false;
  fileList: NzUploadFile[] = [];
  changeStatusRequest: ChangeStatusProjectInterface | undefined;
  dataSource: ProjectModelInterface[] = [];
  studentProject: StudentModelInterface [] = [];
  isVisible = false;
  isVisibleCompleted = false;
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

  constructor(private projectProvider: ProjectDataService, private message: NzMessageService,
              private msg: NzMessageService, private http: HttpClient) {
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

  showModalCompleted(id: number = 0): void {
    this.isVisibleCompleted = true;
    this.getProjects(id);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleCompleted = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleCompleted = false;
  }

  getProjects(idProject: number, status: number = 1): void {
    console.log('project id' + idProject);
    this.dataSource.find(proyecto => {
      if (proyecto.id === idProject) {
        this.studentProject = proyecto.estudiantes;
      }
    });
  }

  onApprovedProject(statusId: number = 1): void {
    this.projectProvider.getProjets(0, 5, statusId).subscribe(
      (projects: PaginationInterface) => {
        this.pagination = projects;
        this.dataSource = projects.content;
        console.log(`Datos de Proyectos, statusId: ${statusId}`, this.dataSource);
      }
    );
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  getProjectByStatus(status: number): void {
    this.projectProvider.getProjets(0, 5, status).subscribe(
      (projects: PaginationInterface) => {
        this.pagination = projects;
        this.dataSource = projects.content;
        console.log('Datos de Proyectos ', this.dataSource);
      }
    );
  }

  onRejectedProject(idProject: number): void {

    this.changeStatusRequest = {
      idProyecto: idProject,
      status: 'RECHAZADO'
    };

    this.projectProvider.changeStatusProject(this.changeStatusRequest).subscribe(response => {
      console.log('resultado guardar', response);
      this.getProjectByStatus(1);
      this.message.create('warning', `Se Rechazo el proyecto`);
    }, error => {
      console.log('Error al rechazar proyecto ', error);
      this.message.create('error', `Error al tratar de rechazar el proyecto`);
    });
  }

  onCompleteProject(idProject: number): void {
    this.changeStatusRequest = {
      idProyecto: idProject,
      status: 'COMPLETADO'
    };

    this.projectProvider.changeStatusProject(this.changeStatusRequest).subscribe(response => {
      console.log('resultado guardar', response);
      this.getProjectByStatus(2);
      this.message.create('success', `Se Completo el proyecto`);
    }, error => {
      console.log('Error al completar proyecto ', error);
      this.message.create('error', `Error al tratar de completar el proyecto`);
    });
  }

  onRetiredProject(idProject: number): void {

    this.changeStatusRequest = {
      idProyecto: idProject,
      status: 'RETIRO'
    };

    this.projectProvider.changeStatusProject(this.changeStatusRequest).subscribe(response => {
      console.log('resultado guardar', response);
      this.getProjectByStatus(3);
      this.message.create('warning', `Se dio de baja el proyecto`);
    }, error => {
      console.log('Error al hacer un retiro del proyecto ', error);
      this.message.create('error', `Error al tratar de retirar el proyecto`);
    });
  }

  onApproveProject(idProject: number): void {

    this.changeStatusRequest = {
      idProyecto: idProject,
      status: 'APROBADO'
    };

    this.projectProvider.changeStatusProject(this.changeStatusRequest).subscribe(response => {
      console.log('resultado guardar', response);
      this.getProjectByStatus(1);
      this.message.create('success', `Se Aprobo el proyecto`);
    }, error => {
      console.log('Error al aprobar el proyecto ', error);
      this.message.create('error', `Error al tratar de aprobar el proyecto`);
    });
  }


  handleChange({file, fileList}: NzUploadChangeParam): void {

    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  handleChange2(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
  }
  uploadFileName = '';

  handleUpload = (item: any) => {
    const formData = new FormData();
    formData.append(item.name, item.file as any, this.uploadFileName);
    this.http.post('https://jsonplaceholder.typicode.com/posts/', formData).subscribe(
      res => {
        console.log('success', res);
        item.onSuccess(item.file);
      },
      (err) => {
        item.onError(err, item.file);
      }
    );
  };

  beforeUpload = (file: NzUploadFile): boolean => {
    this.uploadFileName = file.name;
    return true;
  };

}

