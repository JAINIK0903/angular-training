import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NullPipe } from './pipes/null.pipe';
import { ProductRoutingModule } from './product.routing.module';
import { HoverDirective } from '../directives/hover.directive';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, NullPipe, HoverDirective],
  imports: [CommonModule, FormsModule, ProductRoutingModule],
})
export class ProductModule { }
