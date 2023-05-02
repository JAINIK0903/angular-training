import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //Create product in database
  createProduct(products: any) {
    // console.log(products);
    // const header = new HttpHeaders({ myHeader: 'product' });
    this.http
      .post<any>('https://jsonplaceholder.typicode.com/posts', products)
      .subscribe((res) => {
        console.log(res);
      });
  }

  //Fetch product from database
  fetchProduct() {}
}
