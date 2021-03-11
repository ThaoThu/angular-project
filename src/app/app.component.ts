import { Component } from '@angular/core';

// import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(){

  }
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
      name: 'Register',
      link : '/register'
    },
    // {
    //   name: 'Questions & Answers',
    //   link: '/q&a',
    // },



  ];

  // openRegisterForm():void {
  //   const dialogRef = this.dialog.open(RegisterComponent);
  // }


}

// @Component({
//   selector: 'register',
//   templateUrl: './register/register.component.html',
// })
