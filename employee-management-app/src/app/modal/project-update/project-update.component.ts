import { Component } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { ProjectService } from 'src/app/service/project.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/project';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css'],
})
export class ProjectUpdateComponent {
  constructor(
    public modalService: ModalService,
    private projectService: ProjectService
  ) {}

  public onUpdateProject(project: Project): void {
    console.log(project);
    document.getElementById('xicon')?.click();

    // passing project data into edit project
    this.modalService.editProject = project;

    this.projectService.updateProject(project).subscribe(
      (response: Project) => {
        console.log(response);
        this.projectService.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  faXmark = faXmark;
}
