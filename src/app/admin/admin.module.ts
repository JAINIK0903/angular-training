import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// components
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AdminComponent, AdminProductsComponent, AddProductComponent, EditProductComponent, AdminUsersComponent, EditUserComponent, CartComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [CartComponent],
})
export class AdminModule { }