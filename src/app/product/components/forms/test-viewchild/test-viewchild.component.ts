import { Component, OnInit, ViewChild } from '@angular/core';
import { TestViewchildChildComponent } from '../test-viewchild-child/test-viewchild-child.component';

@Component({
  selector: 'app-test-viewchild',
  templateUrl: './test-viewchild.component.html',
  styleUrls: ['./test-viewchild.component.scss']
})
export class TestViewchildComponent implements OnInit {
@ViewChild('child') child1 !: TestViewchildChildComponent;
  model = {
    name : 'Thu Thao'
  }
  constructor() { }

  ngOnInit(): void {
  }
  toggleInParent(){
    this.child1.toggle('sss')
  }

}
