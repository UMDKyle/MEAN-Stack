import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  //fetch
  private http = inject(HttpClient);
  getTodos(){
    // returns an observable
    return this.http.get<any[]>(this.url);
  }
}
