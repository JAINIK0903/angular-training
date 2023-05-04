import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../router/home/home.component';
import { ContactComponent } from '../router/contact/contact.component';
import { AboutUsComponent } from '../router/about-us/about-us.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: ':productId/:productName', component: ProductDetailsComponent },
    ],
  }, //localhost:4200 will load home component
  // { path: 'home/:productId/:productName', component: ProductDetailsComponent }, //localhost:4200/home/productId will load productDetails component
  { path: 'contact', component: ContactComponent }, //localhost:4200/contact will load contact component
  { path: 'aboutus', component: AboutUsComponent }, //localhost:4200/aboutus will load aboutus component
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect to home page at the time of initialization
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
