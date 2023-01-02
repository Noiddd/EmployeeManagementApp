import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project';
import { ModalService } from '../service/modal.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent {
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

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProjects(key: string): void {
    const results: Project[] = [];
    for (const project of this.projects) {
      if (
        project.projectName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        project.projectDetails.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        project.deadline.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(project);
      }
    }

    this.projects = results.slice(-2);

    if (results.length === 0 || !key) {
      this.getProjects();
    }
  }

  public addEmployeeToProject(): void {}
}
