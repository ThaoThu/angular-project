import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Author, Hero } from '../hero-parent/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit {
  @Input()
  hero!: Hero;
  @Input() author!: Author;
  // @Output() deleteAuthor = new EventEmitter<Author>();
  @Output() deleteAuthor = new EventEmitter<Author>();
  @Input('master') masterName = ''
  constructor() { }
  private _name:string = '';
  get (name:string){
    return this._name
  }
  set name(name: string){
    this._name = (name && name.trim())
  }


  ngOnInit(): void {
    console.log("author", this.author);
    
    if(!this.author){
      console.log('sss');
      throw new Error('avatarUrl is required!');
      //throw new Error('author is required')
    }
  }

  handleDelete(){
    this.deleteAuthor.emit(this.author)
  }

}
