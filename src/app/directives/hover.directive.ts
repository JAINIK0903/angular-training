import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {
  @HostBinding('style.transform') scale = 'scale(1)';
  @HostBinding('style.transition') transition = 'all .3s';

  @HostListener('mouseenter') onMouseEnter() {
    this.scale = 'scale(1.05)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale = 'scale(1)';
  }
}
