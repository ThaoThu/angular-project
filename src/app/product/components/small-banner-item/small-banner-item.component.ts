import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-banner-item',
  templateUrl: './small-banner-item.component.html',
  styleUrls: ['./small-banner-item.component.scss']
})
export class SmallBannerItemComponent implements OnInit {
@Input() data: Array<any>= []
  constructor() { }

  ngOnInit(): void {
  }

}
