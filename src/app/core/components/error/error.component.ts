import { Component, OnInit } from '@angular/core';
import { IError } from './error.interface';
import { UiService } from '../../services/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  error$: Observable<IError>;
  
  constructor(private _uiService: UiService) { }
  
  ngOnInit(): void {
    this.error$ = this._uiService.getErrorState$();
  }



}
