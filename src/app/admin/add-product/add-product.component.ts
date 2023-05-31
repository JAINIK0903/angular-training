import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() editProduct: IProduct | undefined;
  @Output() modalClose = new EventEmitter();

  public editId: string | undefined;

  public addProductForm!: FormGroup;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.initializeForm();
    if (this.editProduct) {
      this.editId = this.editProduct.id;
      // this.addProductForm.setValue({
      //   name: this.editProduct.name,
      //   description: this.editProduct.description ?? null,
      //   quantity: this.editProduct.quantity,
      //   price: this.editProduct.price,
      // });
    }
  }

  public initializeForm(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl(
        this.editProduct?.name ?? null,
        Validators.required
      ),
      description: new FormControl(this.editProduct?.description ?? null),
      quantity: new FormControl(this.editProduct?.quantity ?? null, [
        Validators.required,
        Validators.min(0),
      ]),
      price: new FormControl(this.editProduct?.price ?? null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  public addProduct() {
    const product = {
      name: this.addProductForm.value.name,
      description: this.addProductForm.value.description,
      quantity: parseInt(this.addProductForm.value.quantity),
      price: parseInt(this.addProductForm.value.price),
    };
    this._productService.create(product).then(() => {
      this.addProductForm.reset();
      this.modalClose.emit();
    });
  }

  public updateProduct() {
    const product = {
      name: this.addProductForm.value.name,
      description: this.addProductForm.value.description,
      quantity: parseInt(this.addProductForm.value.quantity),
      price: parseInt(this.addProductForm.value.price),
    };
    this._productService.updateProduct(this.editId!, product).then(() => {
      this.modalClose.emit();
    });
  }

  public onClose() {
    this.modalClose.emit();
  }
}
