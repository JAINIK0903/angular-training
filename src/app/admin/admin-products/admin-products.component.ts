import { Component, OnInit } from '@angular/core';

// services
import { ProductService } from 'src/app/services/product.service';

// interfaces
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  public productList: IProduct[] = [];
  public isFetching: boolean = true;
  public isError: boolean = false;
  public isModal: boolean = false;

  public isEdit: boolean = false;
  public editProduct: IProduct | undefined;

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

  public deleteProduct(id: string): void {
    this._productService.delete(id).catch((error) => {
      console.log(error);
    });
  }

  public onUpdate(product: IProduct): void {
    this.isEdit = true;
    this.editProduct = product;
    this.openModal();
  }

  public openModal(): void {
    this.isModal = true;
  }

  public closeModal(): void {
    this.isModal = false;
    this.isEdit = false;
    this.editProduct = undefined;
  }
}