import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value: string) {
  return 'hi ' + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  //@Input({ alias: 'userName' }) name = '';
  name = input('', {
    alias: 'userName',
  });
  @Input({ transform: booleanAttribute }) isSingle!: boolean;

  @Output() myEvent = new EventEmitter<User>();

  sendData() {
    this.myEvent.emit({
      name: this.name(),
      isSingle: this.isSingle,
      newSalary: 45000,
    });
  }

  @ViewChild('myheading') heading?: ElementRef;

  constructor() {
    // init properties
    // dependency injection
    // event listener register
    console.log('user profile constructor', this.name);
    console.log(
      'user profile ngOnInit',
      this.heading?.nativeElement.textContent
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'user profile aftervview init',
      this.heading?.nativeElement.textContent
    );
  }

  ngOnInit() {
    // fetch data
    // call api
    // set properties
    // event listener register
    console.log('user profile ngOnInit', this.name());
    console.log(
      'user profile ngOnInit',
      this.heading?.nativeElement.textContent
    );
  }

  ngOnDestroy() {
    // unregister event listener
    console.log('component destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('user profile ngOnChanges', changes);
    console.log(
      'user profile ngOnChanges',
      this.heading?.nativeElement.textContent
    );
  }

  phoneNumber = 9876543210;

  //name: string = 'John Doe';
  status: string = 'single';
  salary = input.required<number>();
  isBtnDisabled: boolean = false;
  inputVal = 'test';

  users = [
    {
      name: 'John',
      isSingle: true,
      salary: 10000,
    },
    {
      name: 'Jane',
      isSingle: false,
      salary: 20000,
    },
    {
      name: 'Bob',
      isSingle: true,
      salary: 30000,
    },
  ];

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputVal = value;
  }
}
