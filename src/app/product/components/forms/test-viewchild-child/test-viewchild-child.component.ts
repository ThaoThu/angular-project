import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-viewchild-child',
  templateUrl: './test-viewchild-child.component.html',
  styleUrls: ['./test-viewchild-child.component.scss']
})
export class TestViewchildChildComponent implements OnInit {
@ViewChild('view') v !: ElementRef<HTMLElement> 
  constructor() { }

  ngOnInit(): void {
  }

  toggle(params:string){
  console.log("🚀 ~ file: test-viewchild-child.component.ts ~ line 16 ~ TestViewchildChildComponent ~ toggle ~ params", params)
    
    alert('Hello, I am child'+params)
  }

}
