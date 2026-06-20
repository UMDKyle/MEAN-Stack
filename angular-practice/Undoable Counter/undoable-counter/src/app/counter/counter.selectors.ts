import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';


const selectCounterFeature = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterFeature,
  (state) => state.count
);

export const selectHistory = createSelector(
  selectCounterFeature,
  (state) => state.history
);

export const selectCanUndo = createSelector(
  selectCounterFeature,
  (state) => state.history.length > 0
);

export const selectCanRedo = createSelector(
  selectCounterFeature,
  (state) => state.future.length > 0
);