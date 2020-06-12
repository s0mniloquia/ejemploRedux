import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreApp } from '../../store';
import { Observable } from 'rxjs';
import { IError } from '../components/error/error.interface';
import { getErrorSelector, getLoadingSelector } from '../../store/ui.selector';

@Injectable({
  providedIn: 'root'
})
export class UiService {

constructor(private _store: Store<StoreApp>) { }

getErrorState$ = (): Observable<IError> => {
  return this._store.select(getErrorSelector)
}

getLoadingState$ = (): Observable<boolean> => {
  return this._store.select(getLoadingSelector)
}


}


