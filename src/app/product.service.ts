
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ConnectService } from './connect.service';
import { IProduct, ProductItem } from './product'; 

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  productList :ProductItem[] = [];



  constructor(private http : HttpClient) {                 
    // this.getProductList().subscribe(ps =>{ 
    //   this.productList = ps.data.contents;
    // })
   }
  getProductList(api : string): Observable<IProduct> {

  return this.http.get<IProduct>(api)
 
  }

  findProductById(id: any): ProductItem{

    return this.productList.filter(p => p.id = id)[0];
  }
}
