import { Component, Input, OnInit } from '@angular/core';
import { ICart } from 'src/app/interfaces/cart';

// interfaces
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() scale!: string
  @Input() cart!: ICart;
  public cartList: ICart[] = [];
  public isFetching: boolean = true;
  public isError: boolean = false;
  @Input() product!: IProduct
  @Input() addedItems!: IProduct[];
  public qty: number = 0;
  constructor(private productService: ProductService) { }

  public increment() {
    this.qty += 1;
  }

  public decrement() {
    if (this.qty !== 0) {
      this.qty -= 1;
    }
  }

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.isFetching = true;
    this.productService.getAll().subscribe({
      next: (res) => {
        this.cartList = res;
        this.isFetching = false;
        this.isError = false;
      },
      error: (error) => {
        console.log(error);
        this.isFetching = false;
        this.isError = true;
      },
    });
  }
  public onClickOfCart(product: IProduct, qty: number) {
    if (this.qty != 0) {
      console.log('Cart item is successfully added');
      product.quantity = qty;
      this.addedItems.push(product);
      console.log(this.addedItems);
      localStorage.setItem("cart:", JSON.stringify(this.addedItems));
    }
    else {
      window.alert("select atleast 1 quantity");
    }
  }
}
