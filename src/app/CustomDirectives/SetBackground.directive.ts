import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground implements OnInit {

    backColor:string='#36454F';
    textColor:string='#fff';

    constructor(private element: ElementRef,private renderer:Renderer2) {

    }

    ngOnInit() {
       
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.textColor);
    }
}