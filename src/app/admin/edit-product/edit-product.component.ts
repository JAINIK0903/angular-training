import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  @Input() title: string = '';
  @Output() modalClose = new EventEmitter();

  public onClose() {
    this.modalClose.emit();
  }
}
