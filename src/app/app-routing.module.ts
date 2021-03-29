import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatNavComponent} from './mat-nav/mat-nav.component';
import {ProyectoComponent} from './component/proyecto/proyecto.component';
import {EstudianteComponent} from './component/estudiante/estudiante.component';
import {TutorComponent} from './component/tutor/tutor.component';
import {InternoComponent} from './component/tutor/interno/interno.component';
import {ExternoComponent} from './component/tutor/externo/externo.component';

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
  },
  {
    path: 'tutores',
    component: TutorComponent
  },
  {
    path: 'tutores/interno',
    component: InternoComponent
  },
  {
    path: 'tutores/externo',
    component: ExternoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
