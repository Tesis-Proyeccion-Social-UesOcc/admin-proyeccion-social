import {DocumentModelInterface} from './DocumentModelInterface';

export interface RequirementModelInterface {
    id: number;
    original: boolean;
    cantidadCopias: number;
    proceso: any;
    documento: DocumentModelInterface;
}
