import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// components
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [AdminComponent, AdminProductsComponent, AddProductComponent, EditProductComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class AdminModule { }