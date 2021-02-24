
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: '855d9c00',
      name: 'Crossed design dress',
      price: 15.99,
      imageUrl: './assets/imgs/1.jpeg',
      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c01',
      name: 'Fitted textured dress',
      price: 19.99,
      imageUrl: './assets/imgs/2.jpeg',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c02',
      name: 'Neoprene effect dress',
      price: 20.49,
      imageUrl: './assets/imgs/3.jpeg',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c03',
      name: 'Printed ruffle dress',
      price: 49.99,
      imageUrl: './assets/imgs/4.jpeg',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c04',
      name: 'Message cotton t-shirt',
      price: 24.99,
      imageUrl: './assets/imgs/2.jpeg',

      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '855d9c05',
      name: 'Regular fit chest pocket shirt',
      price: 20.99,
      imageUrl: './assets/imgs/3.jpeg',

      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '855d9c06',
      name: 'Regular fit printed cotton shirt',
      price: 29.99,
      imageUrl: './assets/imgs/1.jpeg',

      categories: [
        'male',
        'shirt'
      ]
    },
    {
      id: '855d9c07',
      name: 'Striped cotton t-shirt',
      price: 55.99,
      imageUrl: './assets/imgs/4.jpeg',

      categories: [
        'male',
        'shirt'
      ]
    }
  ];
  constructor() { }
  getProductList(): Observable<IProduct[]> {
    return of(this.products).pipe(delay(50));
  }

  findProductById(id: any): Observable<IProduct> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
