import { Component, Input, OnInit } from '@angular/core';
//Service
import { CartService } from 'src/app/services/cart.service';
//Interface
import { ICart } from 'src/app/interfaces/cart';
import { IProduct } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() addedItems!: IProduct;
  public index !: number;
  public cartList!: ICart[];
  public totalprice!: number;
  public isLoading: boolean = true;
  public isError: boolean = false;
  constructor(private cartService: CartService, private orderService: OrderService) { }
  ngOnInit(): void {
    this.getProductsToCart();
  }
  public initializeCart() {
    const cartItem = localStorage.getItem("cart:");
    if (!cartItem) {
      localStorage.setItem('cart:', JSON.stringify([]));
    }
  }

  public getProductsToCart(): void {
    this.initializeCart();
    this.cartList = JSON.parse(localStorage.getItem('cart:')!);
    // console.log(this.cartList);
    this.totalPrice();
  }

  public emptyCart(): void {
    this.cartService.emptyCart()
    this.getProductsToCart();
  }

  public totalPrice(): void {
    this.totalprice = this.cartList.reduce((total, value) => {
      return total + (value.quantity * value.price);
    }, 0);
  }

  deleteItem(index: number): void {
    this.cartList.splice(index, 1);
    const cart = localStorage.setItem("cart:", JSON.stringify(this.cartList));
    console.log(cart);
  }

  public placeOrder(): void {
    this.orderService.placeOrder(this.cartList).then(() => {
      alert('your order is placed successfully');
    })
      .catch((error) => {
        console.log(error);
      })
  }
}
