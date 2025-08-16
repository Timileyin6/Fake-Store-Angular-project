import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient, private router: Router) { }
 
  public getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  public getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
}

public getProductCategories(): Observable<string[]>{
  return this.http.get<string[]>(`${this.apiUrl}/categories`)
}

public getProductByCategory(category: string) : Observable<Product[]>{
  return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`)
}

public goToProduct(id: number): void {
  this.router.navigate(['/product', id]);
}

}
