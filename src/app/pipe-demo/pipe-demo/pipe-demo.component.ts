import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss'],
})
export class PipeDemoComponent {
  birthday: string = '03/09/2002';
  name: string = 'this is an uppercase text';
  value: string = 'this is a lowercase text';
  args: string = 'this is a titlecase text';
  currency: number = 50;
  decimal: number = 40.43333;
  percent: number = 0.5;
  number: number = 5;
}
