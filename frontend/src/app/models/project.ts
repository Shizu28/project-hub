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
  _: '-',
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
