import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent
  implements OnChanges, OnInit, DoCheck, OnDestroy
{
  // accepts an arry of students using @Input() decorator
  @Input() undergradsList: any;
  @Input() public textValue: any; // value of text input

  @Output() public childEvent = new EventEmitter();
  @Output() public deleteEvent = new EventEmitter();

  // method to emit event to parent component
  sendInfoToParent() {
    this.childEvent.emit('This is a message from child component');
  }

  // Lifestcycle hooks
  // 1. constructor function runs first when component is created

  constructor() {
    console.log('undergrad constructor function');
  }

  // 2. ngOnChanges runs when there is a change in the input property
  ngOnChanges(change: SimpleChanges): void {
    console.log('undergrads ngOnChanges', change);
  }

  // 3. ngOnInit runs after only once after ngOnChanges
  ngOnInit(): void {
    console.log('undergrads ngOnInit');
  }

  // 4. ngDoCheck runs after ngOnInit: used to detect and act upon changes that
  // Angular can't or won't detect on its own
  ngDoCheck(): void {
    console.log('undergrads ngDoCheck');
  }

  // 5. ngOnDestroy runs before the component is destroyed
  ngOnDestroy(): void {
    console.log('undergrads ngOnDestroy');
  }

  deleteStudent(id: number) {
    this.deleteEvent.emit(id);
  }
}
