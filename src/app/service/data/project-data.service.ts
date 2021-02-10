import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginationInterface} from '../../model/pagination-interface';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private httpClient: HttpClient) { }

  getProjets(page = 0, size = 10): Observable<PaginationInterface> {
    return this.httpClient.get<PaginationInterface>(` http://localhost:8080/proyeccion-social/api/proyectos?page=${page}&size=${size}`);
  }
}
