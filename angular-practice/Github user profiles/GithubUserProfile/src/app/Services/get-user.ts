import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from '../user';

@Injectable({
  providedIn: 'root',
})
export class GetUser {
  private http = inject(HttpClient);
  getUsers(name:string){
    return this.http.get<response>( `https://api.github.com/search/users?q=${name}`);
  };
}
