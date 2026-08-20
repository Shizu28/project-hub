import { Component, inject, signal } from '@angular/core';
import { Project as ProjectModel } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/ProjectService';

@Component({
  selector: 'app-project-title',
  imports: [],
  templateUrl: './project-title.html',
})
export class ProjectTitle {
  route = inject(ActivatedRoute);
  projectService = inject(ProjectService);
  project = signal<ProjectModel | undefined>(undefined);
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getById(id).subscribe((project) => {
      this.project.set(project);
    });
  }
}
