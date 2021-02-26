import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3-templates',
  templateUrl: './day3-templates.component.html',
  styleUrls: ['./day3-templates.component.scss']
})
export class Day3TemplatesComponent implements OnInit {

  constructor() { }
  public count = 0
  ngOnInit(): void {
  }
  alert(){
    window.alert('hello, word')
  }
  increase(number : number){
    console.log(number)
  }

}
