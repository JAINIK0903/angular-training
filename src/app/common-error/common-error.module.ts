import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom/custom.component';
import { MyAttributeDirectiveDirective } from './my-attribute-directive.directive';
// import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { CommonErrorComponent } from './common-error.component';



@NgModule({
  declarations: [
    CommonErrorComponent,CustomComponent,MyAttributeDirectiveDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    // TaskService
  ],
  exports: [
    CommonErrorComponent,CustomComponent,MyAttributeDirectiveDirective
  ]
})
export class CommonErrorModule { }
