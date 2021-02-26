import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Day1Component } from './day1-Routing/day1.component';
import { DirectivesComponent } from './day2-Directives/directives.component';
import { Day3TemplatesComponent } from './day3-templates/day3-templates.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'day1',
    component: Day1Component,
  },
  {
    path: '',
    redirectTo: '/day3',
    pathMatch: 'full',
  },
  {
    path: 'day2',
    component: DirectivesComponent,
  },
  {
    path: 'day3',
    component: Day3TemplatesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
