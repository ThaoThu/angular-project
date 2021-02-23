import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [RouterModule],
})
export class ProductModule {}
