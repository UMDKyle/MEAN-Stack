import { Component, inject, signal } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { StarwarService } from '../Services/starwar-service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-starwar-search',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './starwar-search.html',
  styleUrl: './starwar-search.scss',
})
export class StarwarSearch {
  characterName = new FormControl('');
  service = inject(StarwarService);
  films = signal<any>([]);
  onSubmit():void{
    console.log(this.characterName.value);
    if (this.characterName.value){
      this.service.getPeople(this.characterName.value).subscribe((val:any) => {
        this.films.set(val);
      });
    }

  }
}
