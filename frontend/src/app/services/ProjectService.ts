import { inject, Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);
  private baseUrl = '/api/projects';

  getAll() {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }

  update(p: Project) {
    return this.http.put<Project>(`${this.baseUrl}/${p.id}`, p);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
