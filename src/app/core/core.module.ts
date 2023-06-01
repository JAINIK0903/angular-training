import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../product/pipes/filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    // FilterPipe
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    // FilterPipe
  ]
})
export class CoreModule { }
