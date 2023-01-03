import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/employee';
import { Project } from 'src/app/project';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalService } from 'src/app/service/modal.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-addemployee',
  templateUrl: './project-addemployee.component.html',
  styleUrls: ['./project-addemployee.component.css'],
})
export class ProjectAddemployeeComponent {
  faXmark = faXmark;

  public employeeToAdd: number[] = [];

  constructor(
    public modalService: ModalService,
    private projectService: ProjectService,
    public employeeService: EmployeeService
  ) {}

  public employeesAvailable: Employee[] = [];

  ngOnInit(): void {
    this.getEmployeeAvailable();
  }

  public getEmployeeAvailable(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employeesAvailable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmployeesToArray(employeeId: number): void {
    this.employeeToAdd.push(employeeId);
    console.log(this.employeeToAdd);
  }

  public onAddEmployeesToProject(project: Project): void {
    document.getElementById('xicon')?.click();

    this.projectService
      .addEmployeeToProject(project, this.employeeToAdd)
      .subscribe(
        (response: Project) => {
          console.log(response);
          this.projectService.getProjects();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
