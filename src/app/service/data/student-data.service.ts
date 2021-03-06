import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginationInterface} from '../../model/pagination-interface';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {ProjectRequestInterface} from '../../model/request/ProjectRequest';
import {DocumentoRequerimientoModel} from '../../model/DocumentoRequerimientoModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  //private domainLocal: string = 'https://chatbot-proyeccion-social-uefy.rj.r.appspot.com';
  //private domainLocal = 'http://localhost:8080';
  private domainLocal = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  findAllStudents(page = 0, size = 10, flag = 'no'): Observable<PaginationInterface> {
    return this.httpClient.get<PaginationInterface>(` ${this.domainLocal}/proyeccion-social/api/estudiantes?isComplete=${flag}&page=${page}&size=${size}`);
  }
  findAllEstadoRequerimientos(due: string): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/estudiantes/${due}/proyectos/estadoRequerimiento`);
  }
  approveDocument(projectId: number, requirementId: number): Observable<DocumentoRequerimientoModel> {
    return this.httpClient.post<DocumentoRequerimientoModel >(` ${this.domainLocal}/proyeccion-social/api/estudiantes/${projectId}/documentos/${requirementId}`, null);
  }
}
