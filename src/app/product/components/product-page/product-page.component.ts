import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  isLogin = false;


  isDarkTheme = true
  constructor(
    private productService: ProductService,
    private router: Router, public auth: AuthService) { }


  ngOnInit(): void {
  }
  hangleChangeSwitch (){
    this.isDarkTheme = !this.isDarkTheme
  }
  login() {
    this.auth.isAuth = true;
    this.isLogin = true;
  }
  logout() {
    this.auth.isAuth = false;
    this.isLogin = false;
  }


}
