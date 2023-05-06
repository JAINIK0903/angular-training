import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
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
  changeSaved: boolean = false;
  productId: number = 0;
  productName: string = '';
  paramsSubscription: Subscription | any;
  errorMessage!: string;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.productName = this.activatedRoute.snapshot.params['productName'];
    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (parameters: Params) => {
        //console.log(parameters);
        this.productId = parameters['productId'];
        this.productName = parameters['productName'];
      }
    );
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log('Data coming from the resolver', data['firstresolver']);
    });
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log('Data coming from the resolver', data['firstresolver']);
    });
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (this.changeSaved) {
      return true;
    } else {
      return confirm('Do you want to discard changes?');
    }
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
