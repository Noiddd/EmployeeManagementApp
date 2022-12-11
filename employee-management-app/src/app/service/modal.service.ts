import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Project } from '../project';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showEmployeeAdd: boolean = false;
  showEmployeeEdit: boolean = false;
  showEmployeeDelete: boolean = false;
  showEmployee: boolean = false;

  public editEmployee?: Employee;
  public deleteEmployee?: Employee;

  showProjectAdd: boolean = false;
  showProjectEdit: boolean = false;
  showProjectDelete: boolean = false;
  showProject: boolean = false;

  public editProject?: Project;
  public deleteProject?: Project;

  constructor() {}
}
