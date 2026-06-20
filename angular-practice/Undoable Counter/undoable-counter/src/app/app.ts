import { Component } from '@angular/core';
import { CounterComponent } from './counter-component/counter-component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
