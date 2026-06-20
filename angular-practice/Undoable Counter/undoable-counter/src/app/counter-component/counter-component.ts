import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectCanRedo, selectCanUndo, selectCount, selectHistory } from '../counter/counter.selectors';
import { counterChange, counterRedo, counterUndo } from '../counter/counter.actions';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  private store = inject(Store);

  count   = toSignal(this.store.select(selectCount),   { initialValue: 0 });
  history = toSignal(this.store.select(selectHistory), { initialValue: [] });
  canUndo = toSignal(this.store.select(selectCanUndo), { initialValue: false });
  canRedo = toSignal(this.store.select(selectCanRedo), { initialValue: false });

  change(amount: number) { this.store.dispatch(counterChange({ amount })); }
  undo()                 { this.store.dispatch(counterUndo()); }
  redo()                 { this.store.dispatch(counterRedo()); }
}
