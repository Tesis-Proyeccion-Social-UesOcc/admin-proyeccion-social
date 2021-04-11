import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PlantillaDataService} from '../../../../service/data/plantilla-data.service';
import {ServiceResponseInterface} from '../../../../model/service-response-interface';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-agregar-plantilla',
  templateUrl: './agregar-plantilla.component.html',
  styleUrls: ['./agregar-plantilla.component.css']
})
export class AgregarPlantillaComponent implements OnInit {

  isVisible = false;
  validateForm!: FormGroup;
  fileName = '';
  file: File| any;
  serviceResponse: ServiceResponseInterface | undefined;
  toolTipColor = environment.toolTipColor;

  constructor(private message: NzMessageService, private form: FormBuilder,
              private templateDataService: PlantillaDataService) { }

  ngOnInit(): void {
    this.validateForm = this.form.group({
      nombre: [null, [Validators.required]],
      file: [null, [Validators.required]]
    });


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
  submitForm(): void {
    console.log('se envio', this.validateForm.controls);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      console.log(`valor control: ${this.validateForm.controls[i].value}`);
    }
    const formData = new FormData();
    console.log( `nombre ${this.validateForm.getRawValue()['nombre']}`);
    formData.append('file', this.file);
    formData.append('nombre', this.validateForm.getRawValue()['nombre']);
    this.templateDataService.createTemplate(formData).subscribe(data => {
        this.serviceResponse = data;
        console.log(this.serviceResponse);
        if (this.serviceResponse.code === '00'){
          this.message.create('success', `Plantilla creada!`);
          this.isVisible = false;
        } else {
          this.message.create('error', `Error al crear plantilla \n ${this.serviceResponse.message}`);
        }
      }
    );
    //const upload$ = this.http.post("/api/thumbnail-upload", formData);

    //upload$.subscribe();
  }


  onFileSelected(event: any): void {
    this.file = event.target.files[0];

    if (this.file) {

      this.fileName = this.file.name;
      console.log(this.fileName);
    }
  }
}
