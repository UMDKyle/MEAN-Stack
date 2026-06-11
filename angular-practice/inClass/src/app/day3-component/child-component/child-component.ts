import { Component,input,OnChanges,output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent implements OnChanges {
  fromParent = input<string>("");
  toParent = output<string>();
  val = '';
  onUserInput(){
    this.toParent.emit(this.val);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child component, On changes");
  }
}
