
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
      name: 'Fresh green vegetable',
      price: 15.99,
      imageUrl: './assets/imgs/product1.jpg',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fuga, ipsam hic illo omnis ipsum libero voluptates accusamus. Modi eos voluptatem, vero eligendi aliquid maxime accusantium unde enim quidem nostrum.',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c01',
      name: 'Fresh river fish',
      price: 19.99,
      imageUrl: './assets/imgs/product2.jpg',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fuga, ipsam hic illo omnis ipsum libero voluptates accusamus. Modi eos voluptatem, vero eligendi aliquid maxime accusantium unde enim quidem nostrum.',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c02',
      name: 'Fresh pomegranate',
      price: 20.49,
      imageUrl: './assets/imgs/product3.jpg',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fuga, ipsam hic illo omnis ipsum libero voluptates accusamus. Modi eos voluptatem, vero eligendi aliquid maxime accusantium unde enim quidem nostrum.',

      categories: [
        'female',
        'dress'
      ]
    },
    {
      id: '855d9c03',
      name: 'Cabbage vegetables',
      price: 49.99,
      imageUrl: './assets/imgs/product4.jpg',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fuga, ipsam hic illo omnis ipsum libero voluptates accusamus. Modi eos voluptatem, vero eligendi aliquid maxime accusantium unde enim quidem nostrum.',
      categories: [
        'female',
        'dress'
      ]
    },
   
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
