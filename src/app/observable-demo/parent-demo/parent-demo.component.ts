import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss'],
})
export class ParentDemoComponent {
  IsDisplay: boolean = true;
  colors = ['bg-primary-400', 'bg-danger-400'];

  selectedColor: string = '';
  subscription: Subscription | undefined;
  title: string = 'Jainik';
  constructor(private colorService: CommonService) {}

  ngOnInit(): void {}
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
