import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/project';
import { ModalService } from 'src/app/service/modal.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent {
  public onAddProject(addForm: NgForm): void {
    document.getElementById('xicon')?.click();

    this.projectService.addProject(addForm.value).subscribe(
      (response: Project) => {
        console.log(response);
        this.projectService.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(
    public modalService: ModalService,
    private projectService: ProjectService
  ) {}

  faXmark = faXmark;
}
