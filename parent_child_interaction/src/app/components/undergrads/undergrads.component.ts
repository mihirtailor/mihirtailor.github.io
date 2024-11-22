import { Component, Input } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // accepts an arry of students using @Input() decorator
  @Input() undergradsList: any;
}
