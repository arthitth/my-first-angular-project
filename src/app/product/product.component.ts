import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy  {
  productName = 'A Book'
  isDisabled = true
  products = [''];
  private productsSubscription = new Subscription;

  constructor(private productsService: ProductService
    // ,private productsSubscription : Subscription
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.productsService.getProducts();
      this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
        this.products = this.productsService.getProducts();
      });

      this.isDisabled = false;
      // this.productName ='A Tree'
    }, 3000);
  }

  onAddProduct(){
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  onAddProductForm(form:any) {
    // console.log(form);
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();

  }
}
