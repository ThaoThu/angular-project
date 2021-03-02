import { Component, ContentChild, OnInit } from '@angular/core';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  constructor() { }
  @ContentChild(ItemComponent)
  collapse!: ItemComponent;
  isShow : boolean = true
  number1: number = 0;
  number2: number = 0;
  total: number = 0;


  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    console.log('collapse', this.collapse);
    
    
  }
  sum(){
this.total = this.number1 + this.number2
  }
  questionAnswer = [
    {
      q: 'What\'s our main products',
      a: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi sequi inventore, maxime sed officia! Tempora obcaecati blanditiis repudiandae eligendi sequi, excepturi quam id beatae mollitia, facere eaque perferendis atque.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi sequi inventore, maxime sed officia! Tempora obcaecati blanditiis repudiandae eligendi sequi, excepturi quam id beatae mollitia, facere eaque perferendis atque.',

      ]
    },
    // {
    //   q: 'What\'s our main products',
    //   a: [
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi sequi inventore, maxime sed officia! Tempora obcaecati blanditiis repudiandae eligendi sequi, excepturi quam id beatae mollitia, facere eaque perferendis atque.',
    //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi sequi inventore, maxime sed officia! Tempora obcaecati blanditiis repudiandae eligendi sequi, excepturi quam id beatae mollitia, facere eaque perferendis atque.',

    //   ]
    // }
  ]

  ngOnInit(): void {
  }

}
