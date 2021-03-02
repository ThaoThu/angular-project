import { Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {
  @Input() question: string = ''
  @Input() answers: Array<any> = []
  @Input() selected: boolean = false
  @Input() total: number = 0;
  isShow = true
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: item.component.ts ~ line 17 ~ ItemComponent ~ ngOnChanges ~ changes", changes.total.currentValue)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  ngOnInit(): void {
    console.log('ng on init');
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ng do check');
    
  }


  toggleSelected() {
    // console.log('sss,', this.selected);
    
    this.selected = !this.selected
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ng on destroy');
    
  }

}
