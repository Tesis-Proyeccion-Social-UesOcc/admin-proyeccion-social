import {Component, OnInit} from '@angular/core';
import {PersonalInternoDataService} from '../../../service/data/personal-interno-data.service';
import {ServiceResponseInterface} from '../../../model/service-response-interface';
import {InternalPersonalModelInterface} from '../../../model/internal-personal-model-interface';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html',
  styleUrls: ['./interno.component.css']
})
export class InternoComponent implements OnInit {
  searchValue = '';
  visible = false;
  personal: InternalPersonalModelInterface [] = [];
  listOfDisplayData: InternalPersonalModelInterface [] = [];
  toolTipColor = environment.toolTipColor;

  constructor(private personalInternoProvider: PersonalInternoDataService) {
    this.personalInternoProvider.getPersonal(1).subscribe(
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
