import {StudentModelInterface} from './student-model-interface';

export interface ProjectModelInterface {
    id: number;
    duracion: string;
    interno: boolean;
    nombre: string;
    personal: string;
    estudiantes: StudentModelInterface[];
}
