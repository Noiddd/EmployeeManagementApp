import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css'],
})
export class EmployeeDeleteComponent {
  constructor(
    public modalService: ModalService,
    private employeeService: EmployeeService
  ) {}

  public onDeleteEmployee(employeeId: number): void {
    document.getElementById('xicon')?.click();

    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.employeeService.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteEmployee() {
    this.onDeleteEmployee(this.modalService.deleteEmployee?.id!);
  }
  faXmark = faXmark;
}
