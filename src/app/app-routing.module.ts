import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatNavComponent} from './mat-nav/mat-nav.component';
import {ProyectoComponent} from './component/proyecto/proyecto.component';
import {EstudianteComponent} from './component/estudiante/estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectoComponent,
  },
  {
    path: 'proyectos',
    component: ProyectoComponent
  },
  {
    path: 'estudiantes',
    component: EstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
