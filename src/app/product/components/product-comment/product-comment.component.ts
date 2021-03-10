import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Comment } from './comment';
@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent implements OnInit {
  comment : Comment = {
    name : '',
    mail:'',
    review: '',
    point : 1
  }
  @ViewChild('commentForm') form !: NgForm
  comments: Comment[] = []
  constructor( public productService : ProductService) { }

  ngOnInit(): void {
    this.getComment()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("🚀 ~ file: product-comment.component.ts ~ line 19 ~ ProductCommentComponent ~ ngOnChanges ~ changes", changes)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  getComment(){
    this.productService.getComment().subscribe(comment =>{
      console.log("🚀 ~ file: product-comment.component.ts ~ line 30 ~ ProductCommentComponent ~ this.productService.getComment ~ comment", comment)
      this.comments = comment.reverse().splice(0,5)
    })
  }

  addComment(){
    this.productService.addComment(this.comment).subscribe()
    this.form.reset()
    setTimeout(()=> this.getComment(),1000)
  

  }

}
