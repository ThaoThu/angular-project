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
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Products',
      link: '/product',
    },
    
  ];
}
