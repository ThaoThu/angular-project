import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.scss']
})
export class SmallBannerComponent implements OnInit {

  constructor() { }

  texts = [
    {
      txt1 :'Green Vegetable',
      txt2: '100% ORGANIC',
      txt3: 'Healthy Nutrition',
      bg : '../../../assets/imgs/v1.jpg'
    },
    {
      txt1 :'Fresh herbs',
      txt2: 'SPINACH',
      txt3: 'Healthy Food',
      bg : '../../../assets/imgs/v2.jpg'
    }
  ]

  ngOnInit(): void {
  }

}
