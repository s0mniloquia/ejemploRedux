import { Component, Input } from '@angular/core';

@Component({
  selector: 'vdfn-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input() error: any = null;
  constructor() { }

}
