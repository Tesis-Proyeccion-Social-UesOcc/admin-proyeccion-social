import {DepartamentInterface} from './department-model-interface';

export interface InternalPersonalModelInterface {
  id: number;
  nombre: string;
  apellido: string;
  departamento: DepartamentInterface;
  descripcion: string;
  tipoPersonal: TipoPersonalInteface;
  personalEncargado: PersonalEncargadoInteface;
}

export interface TipoPersonalInteface {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface PersonalEncargadoInteface {
  id: number;
  horario: string;
  ubicacion: string;
}
