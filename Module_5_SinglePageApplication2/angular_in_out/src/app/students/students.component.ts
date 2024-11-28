import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnChanges {
  @Input() title_from_parent: string = '';
  @Input() student_from_parent!: { id: number; name: string; age: number };
  @Output() value_from_child = new EventEmitter();

  addVal(val: string) {
    console.log(val);
    this.value_from_child.emit(val);
  }

  constructor() {
    console.log('Constructor is called');
  }

  ngOnInit() {
    console.log('ngOnInit is called');
    console.log('Before', this.title_from_parent);
    this.title_from_parent = 'Title is updated';
    console.log('After', this.title_from_parent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called', changes);
  }
}
