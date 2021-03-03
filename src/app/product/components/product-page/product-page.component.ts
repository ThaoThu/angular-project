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
  pagination = {
    page: 1,
    totalPage : 2,
    pageSize : 4
  }


  constructor(
    ) { }


  ngOnInit(): void {
  
  }

  changePage(page:any){
    console.log('page', page);
  
    
    

  }

}
