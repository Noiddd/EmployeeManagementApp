import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showEmployeeAdd = false;
  showEmployeeEdit: boolean = false;
  showEmployeeDelete: boolean = false;
  showEmployee: boolean = false;

  showProjectAdd: boolean = false;
  showProjectEdit: boolean = false;
  showProjectDelete: boolean = false;
  showProject: boolean = false;

  constructor() {}
}
