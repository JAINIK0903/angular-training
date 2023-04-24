import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom/custom.component';
import { FormsModule } from '@angular/forms';
import { CommonErrorComponent } from './common-error.component';
import { MyAttributeDirectiveDirective } from './my-attribute-directive.directive';



@NgModule({
  declarations: [
    CommonErrorComponent,CustomComponent,MyAttributeDirectiveDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [
    CommonErrorComponent,CustomComponent,MyAttributeDirectiveDirective
  ]
})
export class CommonErrorModule { }
