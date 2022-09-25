import { Component, OnInit,Input, EventEmitter, Output  } from '@angular/core';
import { ProductService } from 'src/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productName: string ='';
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
  }

  onClicked(){
    // this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);

  }
}
