import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom/custom.component';
import { FormsModule } from '@angular/forms';
import { CommonErrorComponent } from './common-error.component';
import { MyAttributeDirectiveDirective } from './my-attribute-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';

@NgModule({
  declarations: [
    CommonErrorComponent,
    CustomComponent,
    MyAttributeDirectiveDirective,
    ParentComponent,
    ChildComponent,
    CustomStructuralDirectiveDirective,
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [
    CommonErrorComponent,
    CustomComponent,
    MyAttributeDirectiveDirective,
    ParentComponent,
    ChildComponent,
  ],
})
export class CommonErrorModule {}
