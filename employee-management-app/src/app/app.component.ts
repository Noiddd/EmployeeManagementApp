import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { ModalService } from './service/modal.service';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService, EmployeeService, ProjectService],
})
export class AppComponent {
  constructor(public modalService: ModalService) {}
}
