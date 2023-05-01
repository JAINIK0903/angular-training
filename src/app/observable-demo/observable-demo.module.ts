import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@NgModule({
  declarations: [ParentDemoComponent, ChildDemoComponent],
  imports: [CommonModule, FormsModule],
  exports: [ParentDemoComponent, ChildDemoComponent],
})
export class ObservableDemoModule {}
