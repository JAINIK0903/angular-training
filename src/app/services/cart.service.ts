import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/cart';
import { IProduct } from '../interfaces/product';
export interface ICartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public addProductToCart(uid: string, product: ICartItem): void {
    const cartList = JSON.parse(localStorage.getItem('carts')!)
      ? JSON.parse(localStorage.getItem('carts')!)
      : [];

    if (cartList.length > 0) {
      const data = cartList.findIndex((v: ICartItem) => v.id === product.id);
      if (data === -1) {
        cartList.push(product);
      } else {
        cartList[data].quantity = cartList[data].quantity + product.quantity;
      }
    } else {
      cartList.push(product);
    }

    localStorage.setItem('carts', JSON.stringify(cartList));
  }
}