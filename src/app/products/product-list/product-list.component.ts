import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as ProductActions from '../../actions/product.actions';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Section 1
  products: Observable<Product[]>;

  // Section 2
  constructor(private store: Store<AppState>, public productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductActions.GetAllProducts());
    this.store.select('products').subscribe((res: any) => {
      this.products = res.products
    });

  }

  public addNewProduct(){
    
    let id = Math.round(Math.random()*9999);
    const product = {id: id, name: `products ${id}`,url: `product-${id}`, price: id*9};
    this.store.dispatch(new ProductActions.AddProduct(product));
  }

}
