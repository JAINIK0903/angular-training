import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDemoComponent } from './http-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttpDemoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [HttpDemoComponent],
})
export class HttpDemoModule {}
