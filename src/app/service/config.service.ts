import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PaginationInterface} from '../model/pagination-interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  getProjets(page = 0, size = 10): Observable<PaginationInterface> {
    return this.httpClient.get<PaginationInterface>(` https://chatbot-proyeccion-social-uefy.rj.r.appspot.com/proyeccion-social/api/proyectos?page=${page}&size=${size}`);
  }
}
