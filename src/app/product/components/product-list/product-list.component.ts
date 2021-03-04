import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  pagination = {
    page: 1,
    totalRecords : 25,
    pageSize : 4
  
  }

  isLogin = false;
  filter = ''
  isDarkTheme = true
  
  constructor(
    private productService: ProductService,
    private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(ps => this.productList = ps);
  }
  movePage(item: any): void {
    this.router.navigate(['/product', item]);
  }
  login() {
    this.auth.isAuth = true;
    this.isLogin = true;
  }
  logout() {
    this.auth.isAuth = false;
    this.isLogin = false;
  }
  changePage(page:number){
    console.log('page', page);
    this.productService.getProductList().subscribe(ps => this.productList = ps.reverse());
  
  }
  handleChange(e: any){
    this.filter = e.target.value
    console.log('this.filter', this.filter);
    
  }
  hangleChangeSwitch (){
    this.isDarkTheme = !this.isDarkTheme
  }

  onchangeInput(event: any) {
    console.log(event);
    

  }
}
