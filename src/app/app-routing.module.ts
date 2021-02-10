import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatNavComponent} from './mat-nav/mat-nav.component';

const routes: Routes = [
  {path: '', component: MatNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
