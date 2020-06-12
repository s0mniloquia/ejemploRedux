import { IError } from '../core/components/error/error.interface';

export interface UIState{
    loading: boolean;
    error: IError;
}
