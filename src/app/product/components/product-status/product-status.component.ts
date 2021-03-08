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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.statusString = this.status ? 'Con hang' : 'Het hang'
    // console.log('this.status',this.status);
    
    // this.status = this.status ?  'Con hang' : 'Het hang'
    // console.log('this.status',this.status);

  }
  ngDoCheck(): void {
    console.log('do check');
    
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('after content check');
    
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('after view check');
    
  }



}
