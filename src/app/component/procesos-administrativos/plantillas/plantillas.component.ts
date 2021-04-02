import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InternalPersonalModelInterface} from '../../../model/internal-personal-model-interface';
import {PersonalInternoDataService} from '../../../service/data/personal-interno-data.service';
import {ServiceResponseInterface} from '../../../model/service-response-interface';
import {TemplatesModelInterface} from '../../../model/TemplatesModelInterface';
import {PlantillaDataService} from '../../../service/data/plantilla-data.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';

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

  fileName = '';

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


  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      console.log(this.fileName);
      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
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
}
