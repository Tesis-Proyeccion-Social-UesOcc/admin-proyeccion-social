import { Injectable } from '@angular/core';
import {ProjectDataService} from './project-data.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectProviderService {

    constructor(private projectDataService: ProjectDataService) { }
    getProjects(): any {
        return this.projectDataService.getProjets();
    }
}
