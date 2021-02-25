import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordlengthdetector]'
})
export class PasswordlengthdetectorDirective {

  constructor(private el: ElementRef) {
   console.log(el.nativeElement.value)
   }
  @HostListener("window:keyup") ngOnChanges(event:any) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
   
    let count = this.el.nativeElement.value.length
    if(count > 5){
      this.el.nativeElement.style.background = 'red'
    }else{
      this.el.nativeElement.style.background = 'green'
    }
    
  }

}
