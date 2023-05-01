import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
@Directive({
  selector: '[myAttributeDirective]',
})
export class MyAttributeDirectiveDirective {
  //using hostlistner and hostbinding
  @HostBinding('style.color') colorKey = 'yellow';
  @HostBinding('style.backgroundColor') bgColorKey = 'olive';
  // constructor(private elementRef: ElementRef) {}
  //using renderer approach
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('blue');
    this.colorKey = 'white';
    this.bgColorKey = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight('rgb(70, 70, 255)');
    this.colorKey = 'yellow';
    this.bgColorKey = 'red';
  }

  // ngOnInit() {
  //   this.elementRef.nativeElement.style.backgroundColor = 'blue';
  //   this.elementRef.nativeElement.style.color = 'white';
  // }
  //using hostlistner only
  // private highlight(color: string) {
  //   this.elementRef.nativeElement.style.backgroundColor = color;
  //   this.elementRef.nativeElement.style.color = 'white';
  // }
}
