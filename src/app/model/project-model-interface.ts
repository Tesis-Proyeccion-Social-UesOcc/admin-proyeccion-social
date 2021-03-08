interface ProjectStatus {
  id: number;
  status: string;
  descripcion: string;
}

export interface ProjectModelInterface {
    id: number;
    duracion: string;
    interno: boolean;
    nombre: string;
    personal: any;
    estudiantes: any[];
    fechaCreacion: Date;
    fechaModificacion: Date;
    status: ProjectStatus;
}
