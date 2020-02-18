import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vdfn-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  @Input() display = false;
  constructor() { }


}
