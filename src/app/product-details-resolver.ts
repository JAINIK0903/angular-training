import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpApiService } from './http-api.service';
import { Injectable } from '@angular/core';

interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsResolver implements Resolve<Product> {
  constructor(private httpApiService: HttpApiService) {}

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<any> | Promise<Product> {
    // let product = {} as Product;
    // product.productId = 1;
    // product.productName = 'product-1';
    // product.productPrice = 100;
    // return product;
    return this.httpApiService.getUsers();
  }
}
