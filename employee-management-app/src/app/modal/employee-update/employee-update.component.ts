import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalService } from 'src/app/service/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent {
  constructor(
    public modalService: ModalService,
    private employeeService: EmployeeService
  ) {}

  public onUpdateEmployee(employee: Employee): void {
    document.getElementById('xicon')?.click();

    // passing employee data into edit employee
    this.modalService.editEmployee = employee;

    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.employeeService.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  faXmark = faXmark;
}
