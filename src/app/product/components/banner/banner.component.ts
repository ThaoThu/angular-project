import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() txt1:string = ''
  @Input() txt2:string = ''
  @Input() txt3:string = ''
  @Input() cclass:string=''


  constructor() { }

  ngOnInit(): void {
  }

}
