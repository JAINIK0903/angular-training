//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';

//compoments
import { AppComponent } from './app.component';
import { ObservableDemoModule } from './observable-demo/observable-demo.module';
import { ProductModule } from './product/product.module';
import { HomeComponent } from './router/home/home.component';
import { ContactComponent } from './router/contact/contact.component';
import { AboutUsComponent } from './router/about-us/about-us.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsResolver } from './product-details-resolver';
import { canDeactivateGuard } from './can-deactivate-component.service';
import { HttpApiService } from './http-api.service';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    ObservableDemoModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductDetailsResolver, HttpApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
