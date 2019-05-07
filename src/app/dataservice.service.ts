import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from './models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public httpClient:HttpClient) { }

  public createProduct(product: Product){}

  public updateProduct(product: Product){}
  
  public deleteProduct(id: number){}
  
  public getProductById(id: number){}
  
  public getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://angulardataapi.azurewebsites.net/api/values');
  }
}
