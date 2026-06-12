import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FirstComponent } from './first-component/first-component';
// import { DirectivesIntroComponent } from './directives-intro-component/directives-intro-component';
// import { LifecycleIntroComponent } from './lifecycle-intro-component/lifecycle-intro-component';
// import { Day3Component } from './day3-component/day3-component';
// import { Day4Component } from './day4-component/day4-component';
import { Day6Component } from './day6-component/day6-component';
import { ProductsComponent } from './products-component/products-component';
import { JobBoard } from './job-board/job-board';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Day6Component, ProductsComponent,JobBoard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('inClass');
}
