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

  //validation
  public firstName: string = '';
  public firstNameError: boolean = false;

  public lastName: string = '';
  public lastNameError: boolean = false;

  public email: string = '';
  public emailError: boolean = false;

  public jobTitle: string = '';
  public jobTitleError: boolean = false;

  public salary: string = '';
  public salaryError: boolean = false;

  validateFirstName() {
    if (/\d/.test(this.firstName)) {
      this.firstNameError = true;
    } else {
      this.firstNameError = false;
    }
  }

  validateLastName() {
    if (/\d/.test(this.lastName)) {
      this.lastNameError = true;
    } else {
      this.lastNameError = false;
    }
  }

  validateEmail() {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email.toLowerCase()
      )
    ) {
      this.emailError = false;
    } else {
      this.emailError = true;
    }
  }

  validateSalary() {
    if (/^[0-9]+$/.test(this.salary)) {
      this.salaryError = false;
    } else {
      this.salaryError = true;
    }
  }
}
