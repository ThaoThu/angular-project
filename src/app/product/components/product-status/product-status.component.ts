import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.scss']
})
export class ProductStatusComponent implements OnInit {
  @Input() status: any = false
  statusString : string = '';
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: product-status.component.ts ~ line 14 ~ ProductStatusComponent ~ ngOnChanges ~ changes", changes)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.statusString = this.status ? 'Con hang' : 'Het hang'
  }

  ngOnInit(): void {
 
  }

  ngDoCheck(): void {

  }
  ngAfterContentChecked(): void {

    
  }

  ngAfterViewChecked(): void {
 
    
  }



}
