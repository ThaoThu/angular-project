import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { FormsModule } from '@angular/forms';
import { FilterQueryPipe } from './pipes/filter-query.pipe';
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, TooltipDirective, ProductComponent, ShortenTextPipe, FilterQueryPipe, BannerComponent],
  imports: [
    RouterModule,
    ProductRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule
    
  ]

})
export class ProductModule { }
