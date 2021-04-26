import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './allComponents/footer/footer.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  // {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
