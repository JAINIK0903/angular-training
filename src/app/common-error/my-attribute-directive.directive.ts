import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[myAttributeDirective]',
})
export class MyAttributeDirectiveDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
