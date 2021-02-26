import { Component, OnInit } from '@angular/core';
import { HEROES, authors, Author } from './hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  authors = authors
  heroes = HEROES ;
  master = 'Master';
  handleDelete(author: Author){
    console.log("🚀 ~ file: hero-parent.component.ts ~ line 20 ~ HeroParentComponent ~ handleDelete ~ author", author)
    this.authors = this.authors.filter((item)=> item.id !== author.id)
    
  }

}
