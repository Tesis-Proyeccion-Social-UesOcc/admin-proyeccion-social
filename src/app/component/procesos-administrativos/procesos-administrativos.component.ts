import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-procesos-administrativos',
  templateUrl: './procesos-administrativos.component.html',
  styleUrls: ['./procesos-administrativos.component.css']
})
export class ProcesosAdministrativosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPlantilla(): void {
    this.router.navigateByUrl('/procesos-administrativos/plantillas');
  }
}
