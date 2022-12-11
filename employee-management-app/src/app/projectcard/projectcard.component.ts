import { Component, Input } from '@angular/core';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],
})
export class ProjectcardComponent {
  constructor(public modalService: ModalService) {}

  public editProjectModal() {
    this.modalService.showProjectEdit = true;
    this.modalService.editProject = this.project;
  }
  public deleteProjectModal() {
    this.modalService.showProjectDelete = true;
    this.modalService.deleteProject = this.project;
  }

  @Input() project!: Project;

  faXmark = faXmark;
  faPen = faPen;
}
