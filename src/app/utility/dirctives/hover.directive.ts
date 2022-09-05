import { Directive, ElementRef, OnInit, Renderer2 ,HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
  constructor(private element:ElementRef, private renderer:Renderer2) {

}

ngOnInit(): void{
  this.renderer.setStyle(this.element.nativeElement,'color',"red");
  }

  @HostListener("mouseover")
  onMouseMove(){
    this.renderer.setStyle(this.element.nativeElement,'color',"Blue");
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'color',"red");
  }
}
