import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-intro-component',
  imports: [],
  templateUrl: './lifecycle-intro-component.html',
  styleUrl: './lifecycle-intro-component.scss',
})
export class LifecycleIntroComponent implements OnInit, AfterContentInit, AfterViewInit,OnChanges{
  ngOnInit(): void {
    console.log("In OnInit");
  }
  ngAfterContentInit(): void {
    console.log("After Content Init");
  }
  ngAfterViewInit(): void {
    console.log("After View Init");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes");
  }
}
