import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

// interfaces
import { IUser } from '../interfaces/user';
import { IProduct } from '../interfaces/product';
import { IOrder } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _db: AngularFireDatabase) { }

  public getOrders(): Observable<IOrder[]> {
    const user = JSON.parse(localStorage.getItem('user')!);
    return this._db
      .object(`orders/${user.uid}`)
      .valueChanges()
      .pipe(
        map((res: any) => {
          const orderList: IOrder[] = [];
          if (res != null) {
            Object.keys(res).forEach((x) => {
              if (res[x].status !== 'cancelled') {
                orderList.push({ id: x, ...res[x] });
              }
            });
          }
          return orderList;
        })
      );
  }

  public placeOrder(cartItemList: IProduct[]) {
    const totalPrice: number = cartItemList.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    const user: IUser = JSON.parse(localStorage.getItem('user')!);
    const order: IOrder = {
      items: cartItemList,
      totalPrice: totalPrice,
      paymentMode: 'cash',
      orderedOn: new Date().toString(),
      status: 'pending',
    };
    return this._db.database.ref('orders').child(user.uid!).push(order);
  }
}

