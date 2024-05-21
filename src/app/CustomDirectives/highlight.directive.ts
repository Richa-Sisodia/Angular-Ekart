import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')onMouseEnter(){
this.renderer.addClass(this.element.nativeElement,'productcardhover');
// this.renderer.setStyle(this.element.nativeElement,'top-right','width:9%');
  }
  @HostListener('mouseout') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement,'productcardhover');

  }
}
