import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  data = "This is string interpolation";
  status = 0;
  disable = true;

  userInput = "Initial input";


  onClick(){
    if (this.status===0){
      this.data = "Now this is changed by event binding " + this.status;
      this.status = 1;
      this.disable = false;
    } 
    else{
      this.data = "Now this is changed by event binding " + this.status;
      this.status = 0;
      this.disable = true;
    }

  }

}
