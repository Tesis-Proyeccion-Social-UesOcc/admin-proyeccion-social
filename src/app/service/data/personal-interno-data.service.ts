import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceResponseInterface} from '../../model/service-response-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonalInternoDataService {
  //private domainLocal: string = 'https://chatbot-proyeccion-social-uefy.rj.r.appspot.com';
  private domainLocal = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getPersonal(idTipoPersonal: number = 0): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/personal/findByIdTipoPersonal/${idTipoPersonal}`);
  }
}
