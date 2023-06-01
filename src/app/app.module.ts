//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

//Components
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { AdminModule } from './admin/admin.module';
import { NullPipe } from './product/pipes/null.pipe';
import { HoverDirective } from './directives/hover.directive';

//Environment

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
