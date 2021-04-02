import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ServiceResponseInterface} from '../../model/service-response-interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantillaDataService {

  //private domainLocal: string = 'https://chatbot-proyeccion-social-uefy.rj.r.appspot.com';
  private domainLocal = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getTemplates(): Observable<ServiceResponseInterface> {
    return this.httpClient.get<ServiceResponseInterface>(` ${this.domainLocal}/proyeccion-social/api/plantillas`);
  }
}
