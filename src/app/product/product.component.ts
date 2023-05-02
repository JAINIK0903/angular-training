import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  title: string = 'Manage Products';
  sectiononeTitle: string = 'Create Product';
  sectiontwoTitle: string = 'All Products';

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  onProductCreate(products: {
    productName: string;
    Description: string;
    price: string;
  }) {
    this.productService.createProduct(products);
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
