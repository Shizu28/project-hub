export interface Project {
  title: string;
  id: number;
  startedAt: string;
  finishedAt?: string;
  status: ProjectStatus;
  techStack: string[];
}

export const ProjectStatus = {
  active: 'aktiv',
  completed: 'abgeschlossen',
  discarded: 'verworfen',
  not_set: 'kein Status',
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
