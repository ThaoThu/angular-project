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
    console.log("🚀 ~ file: pagination.component.ts ~ line 27 ~ PaginationComponent ~ ngOnInit ~ this.totalPage ", this.totalPage )
    if(this.totalPage===1){
      this.disablePagination.disableNext =true
    
    }
    this.arrays = Array(this.totalPage).fill(0).map((x, i) => i);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: pagination.component.ts ~ line 35 ~ PaginationComponent ~ ngOnChanges ~ changes", changes.pagination)
    this.renderPage(changes.pagination.currentValue)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
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
