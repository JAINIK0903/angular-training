//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';

//compoments
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CommonErrorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
