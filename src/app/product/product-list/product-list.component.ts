import { Component, OnInit } from '@angular/core';

// interfaces
import { IProduct } from 'src/app/interfaces/product';

// services
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: IProduct[] = [];
  public addedItems: IProduct[] = [];
  public isFetching: boolean = true;
  public isError: boolean = false;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.isFetching = true;
    this._productService.getAll().subscribe({
      next: (res) => {
        this.productList = res;
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
}
