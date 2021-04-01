import {RequirementModelInterface} from './RequirementModelInterface';

export interface RequirementStatusModelInterface {
    id: number;
    documento: string;
    entregado: boolean;
    aprobado: boolean;
    fechaEntrega: Date;
    fechaAprobacion: Date;
}
