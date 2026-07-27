import { Component, signal, computed, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectStatus } from '../../models/project';
import { DatePipe } from '@angular/common';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-projects',
  imports: [DatePipe, Table],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export default class Projects {
  router = inject(Router);
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 2,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 3,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 4,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 5,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 6,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
    {
      id: 7,
      title: 'Project Hub',
      started_at: new Date('2026-07-20'),
      finished_at: new Date('2026-07-20'),
      status: ProjectStatus.active,
      techStack: ['Angular 22', 'Spring Boot', 'Java 26', 'Oracle', 'AWS'],
    },
  ]);

  headers = ['Titel', 'Startdatum', 'Enddatum', 'Techstack', 'Status'];

  rows = computed(() =>
    this.projects().map((p) => [
      p.title,
      p.started_at.toLocaleDateString('de-DE'),
      p.finished_at?.toLocaleDateString('de-DE') ?? '-',
      p.techStack.join(', '),
      p.status,
    ]),
  );

  onRowClick(index: number) {
    const id = this.projects()[index].id;
    this.router.navigate(['/project', id]);
  }
}
