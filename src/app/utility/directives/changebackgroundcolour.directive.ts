import { style } from '@angular/animations';
import { Directive,ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebackgroundcolour]'
})
export class ChangebackgroundcolourDirective {

  constructor(private element: ElementRef, private renderer: Renderer2){

  }
   
      // Direct acess  to host element property 
      // example - border property of hostelement accessed 
  @HostBinding('style.border')
  border!: string;
      
  @HostListener('mouseover')
  onMouseOver() {
        this.changeBackgroundColor('red');
      this.border = '5px solid green';
  }
      
  @HostListener('click')
   onClick() {
      window.alert('Element clicked!');
   }
   
      //bind eventhandler with hostelement event
  @HostListener('mouseleave') onMouseLeave() {
      this.changeBackgroundColor('green');
    this.border = '5px solid yellow';
  }
      
  changeBackgroundColor(color: string){
      this.renderer.setStyle(this.element.nativeElement, 'color', color);
        this.border = '5px solid yellow';
    }
  }

