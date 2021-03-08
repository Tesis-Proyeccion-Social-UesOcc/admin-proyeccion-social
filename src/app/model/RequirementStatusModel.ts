import {RequirementModelInterface} from './RequirementModelInterface';

export interface RequirementStatusModelInterface {
    id: number;
    requerimiento: RequirementModelInterface;
    entregado: boolean;
    aprobado: boolean;
    fechaEntrega: Date;
    fechaAprobacion: Date;
}
