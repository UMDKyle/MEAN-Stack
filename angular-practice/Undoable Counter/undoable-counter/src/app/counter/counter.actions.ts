import {createAction, props} from  '@ngrx/store';

export const counterChange = createAction(
    '[counter] Change',
    props <{amount:number}>()
);

export const counterUndo = createAction('[Counter] Undo');
export const counterRedo = createAction('[Counter] Redo');