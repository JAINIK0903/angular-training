import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  title: string = 'get product by productid';
  productId: number = 0;
  productName: string = '';
  paramsSubscription: Subscription | any;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.productName = this.activatedRoute.snapshot.params['productName'];

    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (parameters: Params) => {
        //console.log(parameters);
        this.productId = parameters['productId'];
        this.productName = parameters['productName'];
      }
    );
    this.activatedRoute.queryParams.subscribe((parameters: Params) => {
      console.log('this.activatedRoute.queryParams :- ', parameters);
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
