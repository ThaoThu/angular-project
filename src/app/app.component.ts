import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'learningAngular';
  items = [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Products',
      link: '/product',
    },
    {
      name: 'Questions & Answers',
      link: '/q&a',
    },


  ];
}
