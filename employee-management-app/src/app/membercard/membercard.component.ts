import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-membercard',
  templateUrl: './membercard.component.html',
  styleUrls: ['./membercard.component.css'],
})
export class MembercardComponent {
  @Input() employee!: Employee;

  faXmark = faXmark;
  faPen = faPen;
}
