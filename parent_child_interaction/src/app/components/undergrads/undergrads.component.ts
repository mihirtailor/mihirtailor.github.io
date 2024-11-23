import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // accepts an arry of students using @Input() decorator
  @Input() undergradsList: any;

  @Output() public childEvent = new EventEmitter();
  @Output() public deleteEvent = new EventEmitter();

  // method to emit event to parent component
  sendInfoToParent() {
    this.childEvent.emit('This is a message from child component');
  }

  deleteStudent(id: number) {
    this.deleteEvent.emit(id);
  }
}
