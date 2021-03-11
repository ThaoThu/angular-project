import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {
 
  constructor(
   
  ) {
    username : new FormControl('',[Validators.required,Validators.minLength(3)])
   }
  registerForm  = new FormGroup({
    username :  new FormControl(''),
    password :  new FormControl(''),
    email :  new FormControl(''),
    passwordConfirmation :  new FormControl(''),



  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('dd',    this.registerForm.value);
    

  }

}
