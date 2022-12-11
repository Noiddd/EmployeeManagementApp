import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../service/modal.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-membercard',
  templateUrl: './membercard.component.html',
  styleUrls: ['./membercard.component.css'],
})
export class MembercardComponent {
  constructor(public modalService: ModalService) {}

  public editEmployeeModal() {
    this.modalService.showEmployeeEdit = true;
    this.modalService.editEmployee = this.employee;
  }

  public deleteEmployeeModal() {
    this.modalService.showEmployeeDelete = true;
    this.modalService.deleteEmployee = this.employee;
  }

  @Input() employee!: Employee;

  faXmark = faXmark;
  faPen = faPen;
}
