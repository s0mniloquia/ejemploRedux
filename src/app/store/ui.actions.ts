import { createAction, props } from '@ngrx/store';
import { IError } from '../core/components/error/error.interface';

export const enum Actions {
    updateUI = '[UI] update UI'
}

export const updateUI = createAction(
    Actions.updateUI,
    props<{ loading: boolean, error: IError }>()
);