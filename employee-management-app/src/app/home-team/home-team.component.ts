import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.css'],
  providers: [EmployeeService],
})
export class HomeTeamComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const button = document;
  }
}
