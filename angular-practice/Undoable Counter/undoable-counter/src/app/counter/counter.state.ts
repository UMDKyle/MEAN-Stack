export interface HistoryEntry{
    action: string;
    before: number;
    after: number;
}
export interface CounterState{
    count:number;
    history:HistoryEntry[];
    future:HistoryEntry[];
}

export const initialState: CounterState = {
    count:0,
    history:[],
    future:[],
}