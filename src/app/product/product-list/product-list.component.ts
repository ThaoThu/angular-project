import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  articles = [
    {
      id: '1',
      slug: 'bai-viet-1',
      title: 'Bai viet 1',
      content: 'Day la noi dung bai viet 1',
      updateAt: '2020-07-06T13:26:31.785Z',
    },
    {
      id: '2',
      slug: 'bai-viet-2',
      title: 'Bai viet 2',
      content: 'Day la noi dung bai viet 2 nhe',
      updateAt: '2020-07-15:00:00.000Z',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
