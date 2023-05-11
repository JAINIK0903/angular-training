import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDemoComponent } from './http-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [HttpDemoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [HttpDemoComponent],
  providers: [UserService],
})
export class HttpDemoModule {}
