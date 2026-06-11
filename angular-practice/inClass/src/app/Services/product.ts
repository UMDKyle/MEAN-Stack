import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'https://dummyjson.com/products';
  private http = inject(HttpClient);
  getProduct(){
    return this.http.get<{products:any[]}>(this.apiUrl)
  }

}
