import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanDeactivateComponentService } from '../can-deactivate-component.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent
  implements OnInit, CanDeactivateComponentService
{
  title: string = 'get product by productid';
  productId: number = 123;
  productName: string = 'product-one';
  paramsSubscription: Subscription | any;
  changeSaved: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    // this.productId = this.activatedRoute.snapshot.params['productId'];
    // this.productName = this.activatedRoute.snapshot.params['productName'];

    // this.paramsSubscription = this.activatedRoute.params.subscribe(
    //   (parameters: Params) => {
    //     //console.log(parameters);
    //     this.productId = parameters['productId'];
    //     this.productName = parameters['productName'];
    //   }
    // );
    // this.activatedRoute.queryParams.subscribe((parameters: Params) => {
    //   console.log('this.activatedRoute.queryParams :- ', parameters);
    // });
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log('Data coming from the resolver', data['firstresolver']);
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.changeSaved) {
      return true;
    } else {
      return confirm('Do you want to discard changes?');
    }
  }
  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }
}
