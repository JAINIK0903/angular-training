import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormDemoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormDemoComponent],
})
export class FormDemoModule {}
