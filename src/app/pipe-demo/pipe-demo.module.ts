import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [PipeDemoComponent, FilterPipe],
  imports: [CommonModule],
  exports: [PipeDemoComponent, FilterPipe],
})
export class PipeDemoModule {}
