import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilteronePipe } from './filterone.pipe';

@NgModule({
  declarations: [PipeDemoComponent, FilterPipe, FilteronePipe],
  imports: [CommonModule, FormsModule],
  exports: [PipeDemoComponent, FilterPipe, FilteronePipe],
})
export class PipeDemoModule {}
