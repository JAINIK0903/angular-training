import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs';

// interfaces
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsRef!: AngularFireList<IProduct>;

  constructor(private _db: AngularFireDatabase) {
    this.productsRef = _db.list('products');
  }

  public getAll() {
    return this.productsRef.snapshotChanges().pipe(
      map((res: any) => {
        const productList: IProduct[] = [];
        if (res != null) {
          res.forEach((item: any) => {
            productList.push({ id: item.key, ...item.payload.val() });
          });
        }
        return productList;
      })
    );
  }

  public create(product: IProduct) {
    return this.productsRef.push(product);
  }

  public update(key: string, product: IProduct) {
    return this.productsRef.update(key, product);
  }

  public delete(key: string) {
    return this.productsRef.remove(key);
  }
}