import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  toolTipColor = environment.toolTipColor;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onInterno(): void {
    this.router.navigateByUrl('/tutores/interno');
  }
  onExterno(): void {
    this.router.navigateByUrl('/tutores/externo');
  }

}
