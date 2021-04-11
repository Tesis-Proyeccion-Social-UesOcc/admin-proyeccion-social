import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantillaDataService {

  //private domainLocal: string = 'https://chatbot-proyeccion-social-uefy.rj.r.appspot.com';
  //private domainLocal = 'http://localhost:8080';
  private domainLocal = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getTemplates(): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/plantillas`);
  }
  deleteTemplateById(idTemplate: number): Observable<ServiceResponseInterface> {
    console.log('eliminar template ' + idTemplate);
    return this.httpClient.delete<ServiceResponseInterface>(`${this.domainLocal}/proyeccion-social/api/plantillas/${idTemplate}`);
  }
  createTemplate(formData: FormData): Observable<ServiceResponseInterface> {
    return this.httpClient.post<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/plantillas`, formData);
  }
  updateTemplate(templateId: number, formData: FormData): Observable<ServiceResponseInterface> {
    return this.httpClient.patch<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/plantillas/${templateId}`, formData);
  }
}
