import { Component,inject, OnInit } from '@angular/core';
import { FetchDataService } from './Services/fetch-data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-day4-component',
  imports: [],
  templateUrl: './day4-component.html',
  styleUrl: './day4-component.scss',
})
export class Day4Component implements OnInit{
  private dataService = inject(FetchDataService);
  sub: Subscription| undefined;
  todos: any[] = [];
  ngOnInit(): void {
    this.sub = this.dataService.getTodos().subscribe((data)=>{
      console.log(data);
      this.todos=data;
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    
  }
}
