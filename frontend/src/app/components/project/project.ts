import { Component, inject, input, signal } from '@angular/core';
import { Project as ProjectModel, ProjectStatus } from '../../models/project';
import { form } from '@angular/forms/signals';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInput } from '../generic-components/text-input/text-input';
import { ProjectService } from '../../services/ProjectService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [ReactiveFormsModule, FormsModule, TextInput],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  project = signal<ProjectModel | undefined>(undefined);

  route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getById(id).subscribe((project) => {
      this.project.set(project);
      this.title.setValue(project.title);
      this.startedAt.setValue(project.startedAt);
      this.finishedAt.setValue(project.finishedAt);
    });
  }
  title = new FormControl<string>('', { nonNullable: true });
  techStack = new FormControl<string[]>([], { nonNullable: true });
  status = new FormControl<ProjectStatus>('-', { nonNullable: true });
  startedAt = new FormControl<string>('', { nonNullable: true });
  finishedAt = new FormControl<string>('', { nonNullable: true });

  resetForm() {
    this.project.set({
      id: 0,
      title: '',
      startedAt: '',
      finishedAt: '',
      status: ProjectStatus.active,
      techStack: ['', ''],
    });
  }

  /* resetStatus() {
    this.projectForm.status().value.set(ProjectStatus._);
  }
  resetTechStack() {
    this.projectForm.techStack().value.set(['']);
  }
  resetStartedAt() {
    this.projectForm.startedAt().value.set(new Date(''));
  }
  resetFinishedAt() {
    this.projectForm.finishedAt ? this.projectForm.finishedAt()?.value.set(new Date('')) : '';
  }
  resetTitle() {
    this.projectForm.title().value.set('');
  }

  setTitle() {}*/
}
