import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent {
  constructor(public modalService: ModalService) {}

  faXmark = faXmark;
}
