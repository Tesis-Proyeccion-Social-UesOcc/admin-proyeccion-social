import { Component, OnInit } from '@angular/core';
import {ServiceResponseInterface} from '../../../../model/service-response-interface';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-agregar-plantilla',
  templateUrl: './agregar-plantilla.component.html',
  styleUrls: ['./agregar-plantilla.component.css']
})
export class AgregarPlantillaComponent implements OnInit {

  isVisible = false;

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
