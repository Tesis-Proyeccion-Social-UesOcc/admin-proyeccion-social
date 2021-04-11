import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalInternoDataService {
  //private domainLocal: string = 'https://chatbot-proyeccion-social-uefy.rj.r.appspot.com';
 // private domainLocal = 'http://localhost:8080';
  //private domainLocal = 'https://api-dot-chatbot-proyeccion-social-uefy.rj.r.appspot.com'
  private domainLocal = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getPersonal(idTipoPersonal: number = 0): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/personal/findByIdTipoPersonal/${idTipoPersonal}`);
  }
}
