
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct, ProductItem } from './product';
import {Comment} from './product/components/product-comment/comment'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  productList :ProductItem[] = [];
  urlProduct = 'https://5ca6d9ac3a082600142799f4.mockapi.io/api/product'
  urlComment = 'https://604880d2b801a40017ccddcf.mockapi.io/product-add'

constructor(private http: HttpClient) {}
  numberSequence(n:number) : Array<number>{
    return Array(n)
  }
  getProductList(apiURL : number): Observable<IProduct> {

  return this.http.get<IProduct>(this.urlProduct+apiURL)
 
  }

  findProductById(id: any): ProductItem{

    return this.productList.filter(p => p.id = id)[0];
  }
  addComment(comment : Comment): Observable<Comment>{

    console.log('add comment');
    
    return this.http.post<Comment>(this.urlComment, comment).pipe(
      catchError(this.handleError)
    )

  }

  getComment(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.urlComment)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
