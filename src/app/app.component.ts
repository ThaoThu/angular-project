import { Component } from '@angular/core';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learningAngular';
  items = [
    {
      name: 'Directives',
      link: '/directives',
    },
  ];
}
