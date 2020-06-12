import { UIState } from './ui.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const uiFeatureKey = 'ui';

export const getUIState = createFeatureSelector<UIState>(uiFeatureKey);

export const getLoadingSelector = createSelector(
    getUIState,
    (state: UIState) => state.loading
);

export const getErrorSelector = createSelector(
    getUIState,
    (state: UIState) => state.error
)
