import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/employee';
import { Project } from 'src/app/project';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalService } from 'src/app/service/modal.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent {
  public onAddProject(addForm: NgForm): void {
    document.getElementById('xicon')?.click();

    console.log(addForm);

    this.projectService.addProject(addForm.value).subscribe(
      (response: Project) => {
        this.projectService.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(
    public modalService: ModalService,
    private projectService: ProjectService,
    public employeeService: EmployeeService
  ) {}

  faXmark = faXmark;

  public employeesAvailable: Employee[] = [];

  ngOnInit(): void {
    this.getEmployeesAvailable();
  }

  public getEmployeesAvailable(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employeesAvailable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
