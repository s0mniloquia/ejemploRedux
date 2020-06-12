import { createReducer, on } from '@ngrx/store';

import { updateUI } from './ui.actions';
import { UIState } from './ui.state';

export const estadoInicial: UIState = {
    loading: false,
    error: null
}

const _uiReducer = createReducer(estadoInicial, 
       on(updateUI, (state, { loading, error }) => ({...state, loading:loading, error:error})) 
);

export function uiReducer(state, action){
    return _uiReducer(state, action);
}