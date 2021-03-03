import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
const productRoutes: Routes = [

  {
    path: '',
    component : ProductComponent,
    
    children: [
      {
        path: '',
        component: ProductPageComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        canActivate: [AuthGuard]
      }
    ]

  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(productRoutes)],
})
export class ProductRoutingModule { }
