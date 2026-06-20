import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { counterChange, counterUndo, counterRedo } from './counter.actions';

export const counterReducer = createReducer(
    initialState,
    on(counterChange, (state,action)=>{
        const newCount = state.count + action.amount;
        const newEntry = {
            action: action.amount > 0 ? `+${action.amount}` : `${action.amount}`,
            before: state.count,
            after:newCount
        };
        const newHistory = [...state.history, newEntry].slice(-50);

        return {
            ...state,
            count:newCount,
            history:newHistory,
            future:[],
        };
    }),

    on(counterUndo,(state)=>{
        if (state.history.length===0){
            return state;
        }
        const lastEntry = state.history[state.history.length-1];
        return{
            ...state,
            count:lastEntry.before,
            history:state.history.slice(0,-1),
            future:[lastEntry, ...state.future]
        }
    }),
    on(counterRedo,(state)=>{
        if (state.future.length===0){
            return state;
        }
        const nextEntry = state.future[0];
        return{
            ...state,
            count:nextEntry.after,
            history:[...state.history,nextEntry],
            future:state.future.slice(1)
        }
    })

)