import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css'],
  providers: [ProjectService],
})
export class HomeProjectComponent implements OnInit {
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

  public projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response.slice(-2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
