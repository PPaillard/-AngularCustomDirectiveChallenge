import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  @HostBinding('class') maClasseCss:string = "";

  @HostListener('mouseenter') mouseEnterEvent(eventData:Event) {
    this.maClasseCss = "survol";
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event) {
    this.maClasseCss = "";
  }

  constructor() { }

}
