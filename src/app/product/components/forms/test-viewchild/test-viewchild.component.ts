import { Component, ElementRef, OnInit, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestViewchildChildComponent } from '../test-viewchild-child/test-viewchild-child.component';

@Component({
  selector: 'app-test-viewchild',
  templateUrl: './test-viewchild.component.html',
  styleUrls: ['./test-viewchild.component.scss']
})
export class TestViewchildComponent implements OnInit {
//
@ViewChild('nameForm',{
  read: ElementRef,
  static: true
}) form!:ElementRef<HTMLFormElement>
@ViewChild('child') viewChild !: TestViewchildChildComponent;
@ViewChildren(TestViewchildChildComponent) list !: QueryList<TestViewchildChildComponent>
  model = {
    name : 'Thu Thao'
  }
  constructor() { }

  ngOnInit(): void {
    console.log('form',this.form);
    
  }
  addItem(item:any){

  }
  toggleInParent(){
    this.viewChild.toggle('asdsa')
  
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('list', this.list);
    
  }



}
