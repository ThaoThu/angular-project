import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
  items : string[] = []
  toggle(params:string){
    alert('hello '+ params)
  }



}
