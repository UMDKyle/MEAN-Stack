import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCanRedo, selectCanUndo, selectCount, selectHistory } from '../counter/counter.selectors';
import { counterChange, counterRedo, counterUndo } from '../counter/counter.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-component',
  imports: [AsyncPipe],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  private store = inject(Store);

  count$ = this.store.select(selectCount);
  history$ = this.store.select(selectHistory);
  canUndo$ = this.store.select(selectCanUndo);
  canRedo$ = this.store.select(selectCanRedo);
  change(amount: number) {
    this.store.dispatch(counterChange({ amount }));
  }
  undo() {
    this.store.dispatch(counterUndo());
  }
  redo() {
    this.store.dispatch(counterRedo());
  }

}
