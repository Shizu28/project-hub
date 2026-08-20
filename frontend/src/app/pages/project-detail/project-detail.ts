import { Component } from '@angular/core';
import { Project } from '../../components/project/project';
import GenericPage from '../../components/generic-components/generic-page/generic-page';
import { ProjectTitle } from '../../components/project-title/project-title';

@Component({
  selector: 'app-project-detail',
  imports: [Project, GenericPage, ProjectTitle],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {}
