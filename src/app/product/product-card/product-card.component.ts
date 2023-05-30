import { Component, Input } from '@angular/core';

// interfaces
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  public qty: number = 0;

  public increment() {
    this.qty += 1;
  }

  public decrement() {
    if (this.qty !== 0) {
      this.qty -= 1;
    }
  }
}
