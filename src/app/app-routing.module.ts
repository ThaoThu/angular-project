import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestViewchildComponent } from './product/components/forms/test-viewchild/test-viewchild.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    
  },
{
  path : 'q&a',
  component: TestViewchildComponent
},

  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full',
  },
  {
    path : 'product',
    loadChildren : () => import('./product/product.module').then(m => m.ProductModule)
  },
 

  {
    path: '**',
    component: NotFoundComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
