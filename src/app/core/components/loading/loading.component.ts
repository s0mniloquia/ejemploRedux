import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{

  displayLoading$: Observable<boolean>;
  
  constructor(private _uiService: UiService) { }

  ngOnInit(): void {
    this.displayLoading$ = this._uiService.getLoadingState$();
  }


}
