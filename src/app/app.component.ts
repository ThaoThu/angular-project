import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learningAngular';
  items = [
    {
      name: 'Day 1',
      link: '/day1',
    },
    {
      name: 'Day 2',
      link: '/day2',
    },
    {
      name: 'Day 3',
      link: '/day3',
    },
  ];
}
