//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';

//compoments
import { AppComponent } from './app.component';
import { ObservableDemoModule } from './observable-demo/observable-demo.module';
import { ProductModule } from './product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './router/home/home.component';
import { ContactComponent } from './router/contact/contact.component';
import { AboutUsComponent } from './router/about-us/about-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, //localhost:4200 will load home component
  { path: 'contact', component: ContactComponent }, //localhost:4200/contact will load contact component
  { path: 'aboutus', component: AboutUsComponent }, //localhost:4200/aboutus will load aboutus component
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    ObservableDemoModule,
    ProductModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
