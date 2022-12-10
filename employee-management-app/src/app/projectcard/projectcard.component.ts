import { Component, Input } from '@angular/core';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],
})
export class ProjectcardComponent {
  @Input() project!: Project;

  faXmark = faXmark;
  faPen = faPen;
}
