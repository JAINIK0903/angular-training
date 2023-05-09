import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../router/home/home.component';
import { ContactComponent } from '../router/contact/contact.component';
import { AboutUsComponent } from '../router/about-us/about-us.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../guard/auth.guard';
import { canDeactivateGuard } from '../can-deactivate-component.service';
import { ProductDetailsResolver } from '../product-details-resolver';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [childAuthGuard],
    canDeactivate: [() => inject(canDeactivateGuard)],
    resolve: { firstResolver: ProductDetailsResolver },
    children: [
      { path: ':productId/:productName', component: ProductDetailsComponent },
    ],
  }, //localhost:4200 will load home component
  // { path: 'home/:productId/:productName', component: ProductDetailsComponent }, //localhost:4200/home/productId will load productDetails component

  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect to home page at the time of initialization
  { path: 'contact', component: ContactComponent }, //localhost:4200/contact will load contact component
  { path: 'aboutus', component: AboutUsComponent }, //localhost:4200/aboutus will load aboutus component
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { message: '404 - Page not found (App Module error)' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
