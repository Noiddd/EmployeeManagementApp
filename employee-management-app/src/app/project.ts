import { Employee } from './employee';

export interface Project {
  id: number;
  projectName: string;
  projectDetails: string;
  progress: number;
  deadline: string;
  employee: number[];
}
