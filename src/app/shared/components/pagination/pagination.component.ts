import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 
import {Pagination} from '../../interface'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination !: Pagination
  arrays : number[] = []
  @Output() onChangePage = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

    if(!this.pagination) throw Error('pagination is required')
    this.arrays = Array(this.pagination.totalPage).fill(0).map((x,i)=>i);
  }
  onchangePage(page:number){
   
    this.onChangePage.emit(page)
    this.pagination = {
      ...this.pagination,
      page : +page
    }
  
  }

}
