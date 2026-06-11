import { Component, inject, OnInit, signal } from '@angular/core';
import { ChildComponent } from './child-component/child-component';
import { FirstService } from '../Services/first-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day3-component',
  imports: [ChildComponent,FormsModule],
  templateUrl: './day3-component.html',
  styleUrl: './day3-component.scss',
})
export class Day3Component  implements OnInit {
  count = signal(0);
  userInput = signal('hello');
  username = '';
  onClick(){
    this.count.set(0);
  }
  handleEvent(str:string){
    console.log("inParent: " + str);
  }

  private firstService = inject(FirstService);

  ngOnInit(): void {
    console.log(this.firstService.users);
  }
  addNewUser(){
    this.firstService.newUsers = {username: this.username} 
  }
}
