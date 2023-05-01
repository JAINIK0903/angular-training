import { Component, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss'],
})
export class ChildDemoComponent {
  selectedColor: string = '';
  IsDisplay: boolean = false;
  subscription: Subscription | undefined;
  colors = ['bg-primary-400', 'bg-danger-400'];
  @Input() title: string = '';
  constructor(private colorService: CommonService) {}

  setColor(color: string) {
    this.colorService.setColor(color);
  }
  subscribe() {
    this.subscription = this.colorService.color$.subscribe((color) => {
      this.selectedColor = color;
      console.log('I am ' + this.title);
    });
  }
  unsubscribe() {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }
}
