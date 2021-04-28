import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { ProductsComponent } from './allComponents/products/products.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'product',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
