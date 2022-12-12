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
    if (
      this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() &&
      this.validateSalary()
    ) {
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

  public formValid: boolean = false;

  validateFirstName(): boolean {
    if (/\d/.test(this.firstName)) {
      this.firstNameError = true;
      return false;
    } else {
      this.firstNameError = false;
      return true;
    }
  }

  validateLastName(): boolean {
    if (/\d/.test(this.lastName)) {
      this.lastNameError = true;
      return false;
    } else {
      this.lastNameError = false;
      return true;
    }
  }

  validateEmail(): any {
    if (this.email == '') {
      this.emailError = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email.toLowerCase()
      )
    ) {
      this.emailError = true;
      return false;
    } else {
      this.emailError = false;
      return true;
    }
  }

  validateSalary(): any {
    if (this.salary == '') {
      this.salaryError = false;
    } else if (/^[0-9]+$/.test(this.salary)) {
      this.salaryError = false;
      return true;
    } else {
      this.salaryError = true;
      return false;
    }
  }
}
