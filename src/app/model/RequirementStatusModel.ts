export interface RequirementStatusModelInterface {
    idRequerimiento: number;
    nombre: string;
    entregado: boolean;
    aprobado: boolean;
    fechaEntrega: Date;
    fechaAprobacion: Date;
}
