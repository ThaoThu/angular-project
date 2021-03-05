import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConnectService } from 'src/app/connect.service';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild('searchInput') input !: ElementRef
  productList: IProduct[] = [];
  pagination = {
    page: 1,
    totalRecords : 25,
    pageSize : 4
  
  }

  isLogin = false;
  filter = ''
  isDarkTheme = true
  a1=''
  constructor(
    private productService: ProductService,
    private router: Router, public auth: AuthService,
    private connectServive : ConnectService
    ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(ps => this.productList = ps);
    console.log('sss',this.connectServive.showDate());
    //this.connectServive.a='ffff'
    this.a1 = this.connectServive.a
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.input?.nativeElement?.focus()
    console.log("🚀 ~ file: product-list.component.ts ~ line 37 ~ ProductListComponent ~ ngAfterViewInit ~ this.input", this.input)
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
