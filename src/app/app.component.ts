import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-shop';
  // @ViewChild('test') test!: ElementRef;
  // constructor(private renderer: Renderer2) {}
  // ngAfterViewInit(): void {
  //   this.renderer.setStyle(this.test.nativeElement, 'backgroundColor', 'red');
  //   this.renderer.setStyle(this.test.nativeElement, 'color', 'white');
  // }
}
