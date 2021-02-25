import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, MatCardModule, MatGridListModule, RouterModule]
})
export class ProductModule { }
