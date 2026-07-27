import { Component } from '@angular/core';
import { Project } from '../../components/project/project';

@Component({
  selector: 'app-project-detail',
  imports: [Project],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {}
