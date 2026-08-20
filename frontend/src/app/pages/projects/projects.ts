import { Component, signal, computed, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectStatus } from '../../models/project';
import { DatePipe } from '@angular/common';
import { Table } from '../../components/generic-components/table/table';
import { ProjectService } from '../../services/ProjectService';
import GenericPage from '../../components/generic-components/generic-page/generic-page';

@Component({
  selector: 'app-projects',
  imports: [Table, GenericPage],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects {
  router = inject(Router);
  projects = signal<Project[]>([]);

  private projectService = inject(ProjectService);

  ngOnInit() {
    this.projectService.getAll().subscribe((data) => this.projects.set(data));
  }

  headers = ['Titel', 'Startdatum', 'Enddatum', 'Techstack', 'Status'];

  rows = computed(() =>
    this.projects().map((p) => [
      p.title,
      p.startedAt,
      p.finishedAt ?? '-',
      p.techStack.join(', '),
      p.status,
    ]),
  );

  onRowClick(index: number) {
    const id = this.projects()[index].id;
    this.router.navigate(['/project', id]);
  }
}
