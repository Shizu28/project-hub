import { Component, inject, input, signal } from '@angular/core';
import { Project as ProjectModel, ProjectStatus } from '../../models/project';
import { form } from '@angular/forms/signals';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInput } from '../text-input/text-input';

@Component({
  selector: 'app-project',
  imports: [ReactiveFormsModule, FormsModule, TextInput],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projectModelv = signal<ProjectModel>({
    id: 0,
    title: '',
    started_at: new Date(''),
    finished_at: new Date(''),
    status: ProjectStatus.active,
    techStack: ['', ''],
  });
  title = new FormControl<string>('', { nonNullable: true });
  techStack = new FormControl<string[]>([], { nonNullable: true });
  status = new FormControl<ProjectStatus>('-', { nonNullable: true });
  started_at = new FormControl<Date>(new Date(''), { nonNullable: true });
  finished_at = new FormControl<Date>(new Date(''), { nonNullable: true });

  resetForm() {
    this.projectModelv.set({
      id: 0,
      title: '',
      started_at: new Date(''),
      finished_at: new Date(''),
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
    this.projectForm.started_at().value.set(new Date(''));
  }
  resetFinishedAt() {
    this.projectForm.finished_at ? this.projectForm.finished_at()?.value.set(new Date('')) : '';
  }
  resetTitle() {
    this.projectForm.title().value.set('');
  }

  setTitle() {}*/
}
