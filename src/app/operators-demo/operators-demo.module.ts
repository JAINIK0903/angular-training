import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsDemoComponent } from './operators-demo/operators-demo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OperatorsDemoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    OperatorsDemoComponent
  ]
})
export class OperatorsDemoModule { }
