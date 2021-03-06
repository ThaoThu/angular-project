import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConnectService } from 'src/app/connect.service';
import { ProductItem } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild('searchInput') input !: ElementRef
  productList : ProductItem[] = [];
  pagination = {
    page : 1,
    pageSize:1,
    totalRecords:1
  }
 


  isLogin = false;
  filter = ''
  isDarkTheme = true

  constructor(
    private productService: ProductService,
    private router: Router, public auth: AuthService,
 
    ) { }

  ngOnInit(): void {
    this.getData(this.pagination.page)
  }

  getData(api:number){
    this.productService.getProductList(api).subscribe(ps => {
      this.productList = ps.data.contents
      this.productService.productList = ps.data.contents
      this.pagination = ps.data.paging
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.focus()
 
  }

  focus(){
    if(this.router.url === '/product'){

      this.input?.nativeElement?.focus()
    }
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
    this.getData(page)
 
  
  }
  handleChange(e: any){
    this.filter = e.target.value
   
    
  }
  hangleChangeSwitch (){
    this.isDarkTheme = !this.isDarkTheme
  }

  onchangeInput(event: any) {
    console.log(event);
    

  }
}
