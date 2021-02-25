import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor = ''
  constructor(private el: ElementRef) {
    el.nativeElement.style.textFillColor = "transparent"
    el.nativeElement.style.background = "linear-gradient(to right, #30CFD0 0%, #330867 100%)"
    el.nativeElement.style.backgroundClip = "text"
    el.nativeElement.style.fontWeight = "bolder";
    el.nativeElement.style.padding = "15px 20px";


  }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor  || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('pink');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
