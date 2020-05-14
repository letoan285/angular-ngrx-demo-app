import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url = 'http://localhost:8000/api/products';
  constructor(public http: HttpClient) { }


  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  public getProduct(){}

  public addProduct(){}


}
