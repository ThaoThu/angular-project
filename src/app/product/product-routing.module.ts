import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
const productRoutes: Routes = [
  // {
  //   path: 'product',
  //   component: ProductListComponent,
  // },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailComponent,
  // },
  {
    path: 'product',
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
