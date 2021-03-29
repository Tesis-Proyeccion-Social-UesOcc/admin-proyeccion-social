import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

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
