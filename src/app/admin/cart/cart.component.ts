import { Component, Input, OnInit } from '@angular/core';
//Service
import { CartService } from 'src/app/services/cart.service';
//Interface
import { ICart } from 'src/app/interfaces/cart';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() addedItems!: IProduct;
  public index !: number;
  public cartList!: ICart[];
  public isLoading: boolean = true;
  public isError: boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.getProductsToCart();
  }
  public getProductsToCart(): void {
    this.cartList = JSON.parse(localStorage.getItem('cart:')!);
    console.log(this.cartList);
  }


  deleteItem(index: number): void {
    this.cartList.splice(index, 1);
    const cart = localStorage.setItem("cart:", JSON.stringify(this.cartList));
    console.log(cart);

  }
}
