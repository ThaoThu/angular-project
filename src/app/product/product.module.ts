import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


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
import { SmallBannerComponent } from './components/small-banner/small-banner.component';
import { SmallBannerItemComponent } from './components/small-banner-item/small-banner-item.component';
import { CardComponent } from './components/card/card.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductCommentComponent } from './components/product-comment/product-comment.component';
import { SharedModule } from '../shared/shared.module';
import { TestViewchildComponent } from './components/forms/test-viewchild/test-viewchild.component';
import { TestViewchildChildComponent } from './components/forms/test-viewchild-child/test-viewchild-child.component';
import { ProductStatusComponent } from './components/product-status/product-status.component';
// import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, TooltipDirective, ProductComponent, ShortenTextPipe, FilterQueryPipe, BannerComponent, SmallBannerComponent, SmallBannerItemComponent, CardComponent, ProductPageComponent, ProductCommentComponent, TestViewchildComponent, TestViewchildChildComponent,ProductStatusComponent],
  imports: [
    RouterModule,
    ProductRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    SharedModule
  
    
  ]

})
export class ProductModule { }
