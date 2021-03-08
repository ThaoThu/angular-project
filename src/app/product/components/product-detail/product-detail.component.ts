import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from 'src/app/connect.service';
import { IProduct, ProductItem } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: ProductItem;
  isLogin = false;

  constructor(private productService: ProductService,
    // tslint:disable-next-line:align
    private activatedRoute: ActivatedRoute,
    private connect: ConnectService,
    private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id');
     this.productService.findProductById(id);
    });
  }

  back() {
    console.log('back')
    this.router.navigate(['/product'])
  }

}
