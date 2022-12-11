import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/service/modal.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css'],
})
export class ProjectDeleteComponent {
  constructor(
    public modalService: ModalService,
    private projectService: ProjectService
  ) {}

  public onDeleteProject(projectId: number): void {
    document.getElementById('xicon')?.click();

    this.projectService.deleteProject(projectId).subscribe(
      (response: void) => {
        console.log(response);
        this.projectService.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteEmployee() {
    this.onDeleteProject(this.modalService.deleteProject?.id!);
  }
  faXmark = faXmark;
}
