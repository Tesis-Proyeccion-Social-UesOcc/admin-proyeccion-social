import {Component, OnInit} from '@angular/core';
import {ServiceResponseInterface} from '../../../model/service-response-interface';
import {TemplatesModelInterface} from '../../../model/TemplatesModelInterface';
import {PlantillaDataService} from '../../../service/data/plantilla-data.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  searchValue = '';
  visible = false;
  templates: TemplatesModelInterface [] = [];
  listOfDisplayData: TemplatesModelInterface [] = [];
  serviceResponse: ServiceResponseInterface | undefined;
  templateId: number = 0;
  fileName = '';
  private fileUpload: any;
  toolTipColor = environment.toolTipColor;

  constructor(private templateDataService: PlantillaDataService, private router: Router, private http: HttpClient,
              private message: NzMessageService) {
    this.templateDataService.getTemplates().subscribe(
      (response: ServiceResponseInterface) => {
        this.templates = response.result;
        this.listOfDisplayData = [...this.templates];
      }
    );
  }
  ngOnInit(): void {
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.templates.filter((item: TemplatesModelInterface) => item.nombre.indexOf(this.searchValue) !== -1);
  }

  watchDocument(url: string): void {
    console.log('click on url: '+ url);
    this.router.navigateByUrl(url);
  }
  onClick(url:string) {
    window.open(url);
  }


  onFileSelected(event: any, idTemplate: number = 0) {
    const file:File = event.target.files[0];
    let id =  idTemplate;
    if (file) {

      this.fileName = file.name;
      console.log(this.fileName);
      const formData = new FormData();

      formData.append('file', file);

      this.templateDataService.updateTemplate(id, formData).subscribe(
        data => {
          this.serviceResponse = data;
          if (this.serviceResponse.code === '00'){
            this.message.create('success', `Plantilla actualizada`);
            this.templateDataService.getTemplates().subscribe(
              (response: ServiceResponseInterface) => {
                this.templates = response.result;
                this.listOfDisplayData = [...this.templates];
              }
            );
          } else {
            this.message.create('error', `No se pudo actualizar la plantilla`);
          }
        });
      //const upload$ = this.http.post("/api/thumbnail-upload", formData);

      //upload$.subscribe();
    }
  }
  onDeleteTemplateById(idTemplate: number): void{
    this.templateDataService.deleteTemplateById(idTemplate).subscribe(data => {
      console.log(data);
      this.message.create('success', `Plantilla eliminada`);
      this.templateDataService.getTemplates().subscribe(
        (response: ServiceResponseInterface) => {
          this.templates = response.result;
          this.listOfDisplayData = [...this.templates];
        }
      );
    });
    //reload

  }
  onTemplateId(id: number){
    this.templateId = id;
    this.fileUpload.click();
  }
}
