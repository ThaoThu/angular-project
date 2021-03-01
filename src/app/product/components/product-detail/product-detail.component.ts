import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  isLogin = false;
  constructor(private productService: ProductService,
    // tslint:disable-next-line:align
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      const id = params.get('id');
      this.productService.findProductById(id).subscribe(product => this.product = product);
    });
  }

  back() {
    console.log('back')
    this.router.navigate(['/product'])
  }

}
