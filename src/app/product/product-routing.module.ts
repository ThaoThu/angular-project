import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
const productRoutes: Routes = [

  {
    path: '',
    component : ProductComponent,
    
    children: [
      {
        path: '',
        component: ProductListComponent
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
