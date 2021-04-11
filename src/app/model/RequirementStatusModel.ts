export interface RequirementStatusModelInterface {
    requerimientoId: number;
    nombre: string;
    entregado: boolean;
    aprobado: boolean;
    fechaEntrega: Date;
    fechaAprobacion: Date;
}
