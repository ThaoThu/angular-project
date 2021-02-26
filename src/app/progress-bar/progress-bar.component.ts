import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress = 0;
  @Input() backgroundColor='';
  @Input() progressColor = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
console.log(changes);

    if("progress" in changes){
      if( typeof changes["progress"].currentValue!== "number"){
        const progress = +changes["progress"].currentValue;
        if(Number.isNaN(progress)){
          this.progress = 0
        }else{
          this.progress = progress
        }
      }

    }
    
  }

}
