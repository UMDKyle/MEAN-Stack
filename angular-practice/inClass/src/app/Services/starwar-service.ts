import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarwarService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://swapi.info/api/people';

  getPeople(name:string){
   return this.http.get<any[]>(`${this.apiUrl}`).pipe(
    map(people => {
      const person = people.find(p=>p.name.toLowerCase() === name.toLowerCase())
        return person;
      }),
    switchMap(person => {
      const filmUrls: string[] = person?.films ?? [];
      if (filmUrls.length === 0) {
        return of([]);
      }
      return forkJoin(filmUrls.map((url:string)=>this.http.get<any>(url)))
    })
    ) 
  }

}
