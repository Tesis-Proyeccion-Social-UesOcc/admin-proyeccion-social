import {DepartamentInterface} from './department-model-interface';

export interface InternalPersonalModelInterface {
  id: number;
  nombre: string;
  apellido: string;
  departamento: DepartamentInterface;
  descripcion: string;
}
