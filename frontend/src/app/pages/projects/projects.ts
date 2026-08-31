import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Project, ProjectStatus } from '../../models/project';
import { Table } from '../../components/generic-components/table/table';
import { ProjectService } from '../../services/ProjectService';
import GenericPage from '../../components/generic-components/generic-page/generic-page';
import { StatusTag, TagType } from '../../components/generic-components/status-tag/status-tag';

const STATUS_TO_TAG: Record<ProjectStatus, TagType> = {
  aktiv: TagType.progress,
  abgeschlossen: TagType.success,
  verworfen: TagType.error,
  'kein Status': TagType.default,
};

@Component({
  selector: 'app-projects',
  imports: [Table, GenericPage, StatusTag],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects {
  router = inject(Router);
  projects = signal<Project[]>([]);

  protected tagFor(status: string): TagType {
    return STATUS_TO_TAG[status as ProjectStatus] ?? TagType.default;
  }
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
