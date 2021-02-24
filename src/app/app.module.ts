import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1-Routing/day1.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    Day1Component,

    // ProductListComponent,
    // ProductDetailComponent,
  ],
  imports: [

    ProductModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AppRoutingModule],
  // bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);
})
export class AppModule { }
