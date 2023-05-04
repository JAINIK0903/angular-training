import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'book-shop';
  // @ViewChild('test') test!: ElementRef;
  // constructor(private renderer: Renderer2) {}
  // ngAfterViewInit(): void {
  //   this.renderer.setStyle(this.test.nativeElement, 'backgroundColor', 'red');
  //   this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
  // }
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
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
