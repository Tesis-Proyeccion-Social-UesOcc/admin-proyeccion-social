import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginationInterface} from '../../model/pagination-interface';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {ProjectModelInterface} from '../../model/project-model-interface';
import {ProjectRequestInterface} from '../../model/request/ProjectRequest';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private domainLocal: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getProjets(page = 0, size = 10, statusId: number = 1): Observable<PaginationInterface> {
    return this.httpClient.get<PaginationInterface>(` ${this.domainLocal}/proyeccion-social/api/proyectos?page=${page}&size=${size}&status=${statusId}`);
  }

  getDepartments(): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface >(` ${this.domainLocal}/proyeccion-social/api/departamentos`);
  }

  getInternalPersonal(id: number): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface >(` ${this.domainLocal}/proyeccion-social/api/personal/findByIdDepartamento/${id}`);
  }

  getExternalPersonal(): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface >(` ${this.domainLocal}/proyeccion-social/api/personal?interno=0`);
  }

  createProject(project: ProjectRequestInterface): Observable<ProjectRequestInterface> {
    return this.httpClient.post<ProjectRequestInterface>(` ${this.domainLocal}/proyeccion-social/api/proyectos`, project);
  }
}
