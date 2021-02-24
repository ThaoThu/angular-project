import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth = false;
  constructor() { }
  // tslint:disable-next-line:typedef
  login() {
    this.isAuth = true;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.isAuth = false;
  }
}
