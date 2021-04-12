import { Component, OnInit } from '@angular/core';
import {InternalPersonalModelInterface} from '../../../model/internal-personal-model-interface';
import {environment} from '../../../../environments/environment';
import {PersonalInternoDataService} from '../../../service/data/personal-interno-data.service';
import {ServiceResponseInterface} from '../../../model/service-response-interface';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  searchValue = '';
  visible = false;
  personal: InternalPersonalModelInterface [] = [];
  listOfDisplayData: InternalPersonalModelInterface [] = [];
  toolTipColor = environment.toolTipColor;

  constructor(private personalInternoProvider: PersonalInternoDataService) {
    this.personalInternoProvider.getPersonalAll(0).subscribe(
      (response: ServiceResponseInterface) => {
        this.personal = response.result;
        this.listOfDisplayData = [...this.personal];
      }
    );
  }

  ngOnInit(): void {
  }

  showModal(id: number): void {

  }


  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.personal.filter((item: InternalPersonalModelInterface) => item.nombre.indexOf(this.searchValue) !== -1);
  }

}
