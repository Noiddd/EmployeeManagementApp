import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.css'],
})
export class HomeProjectComponent {
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
}
