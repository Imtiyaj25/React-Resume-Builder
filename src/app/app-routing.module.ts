import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:FeaturedComponent,
    path:'featured'
  },
  {
    component:StoreComponent,
    path:'store'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
