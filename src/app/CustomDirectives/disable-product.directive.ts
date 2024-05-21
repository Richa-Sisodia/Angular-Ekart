import { Directive, ElementRef, Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[DisableProduct]'
})
export class DisableProductDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input() set DisableProduct(disable:Boolean){
    if(disable){
this.renderer.addClass(this.element.nativeElement,'disableproduct');
    }
  }
}
