import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = ['A Book'];
  productsUpdated = new Subject();

  constructor() { }

  getProducts() {
    return [...this.products];
  }

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next();
  }

}
