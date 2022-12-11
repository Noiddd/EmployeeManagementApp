import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent {
  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('xicon')?.click();

    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.employeeService.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(
    public modalService: ModalService,
    private employeeService: EmployeeService
  ) {}

  faXmark = faXmark;
}