import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css'],
})
export class AllEmployeesComponent {
  public months: String[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public todayMonth: String = this.months[new Date().getMonth()];
  public todayDate: number = new Date().getDate();

  faMagnifyingGlass = faMagnifyingGlass;

  constructor(
    private employeeService: EmployeeService,
    public modalService: ModalService
  ) {}

  public employees: Employee[] = [];

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

  public searchEmployees(key: string): void {
    const results: Employee[] = [];

    for (const employee of this.employees) {
      if (
        employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }

    this.employees = results;

    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
}
