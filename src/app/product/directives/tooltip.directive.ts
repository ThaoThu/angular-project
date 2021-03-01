import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') txt = ''
  constructor(private el: ElementRef, private render: Renderer2) { 

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.render.setAttribute(this.el.nativeElement,'title',this.txt)
  }

}
