export interface Project {
  title: string;
  id: number;
  started_at: Date;
  finished_at?: Date;
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
