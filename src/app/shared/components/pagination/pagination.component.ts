import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Pagination } from '../../interface'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination !: Pagination
  arrays: number[] = []
  disablePagination = {
    disablePrev: true,
    disableNext: false
  }
  totalPage: number = 0
  @Output() onChangePage = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {

    
  }

  renderPage(pagination : any){
    if (!pagination) throw Error('pagination is required')
    this.totalPage = Math.ceil(pagination.totalRecords / pagination.pageSize)
  
    this.setDisable(pagination.page)
  
    this.arrays = Array(this.totalPage).fill(0).map((x, i) => i);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
 
    this.renderPage(changes.pagination.currentValue)

    
  }
  changePage(page: number) {

    this.onChangePage.emit(page)
    this.setDisable(page)
    this.pagination = {
      ...this.pagination,
      page: +page
    }

  }

  setDisable(page: number) {
    if (!page) return
    if (page === 1) {
      this.disablePagination = {
        disablePrev: true,
        disableNext: false
      }
      return;
    }

    if (page === this.totalPage) {
      this.disablePagination = {
        disablePrev: false,
        disableNext: true
      }
      return;
    }

    this.disablePagination = {
      disablePrev: false,
      disableNext: false
    }

  }

}
