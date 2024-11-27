import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  @Input() title_from_parent: string = '';
  @Input() student_from_parent!: { id: number; name: string; age: number };
  @Output() value_from_child = new EventEmitter();

  addVal(val: string) {
    console.log(val);
    this.value_from_child.emit(val);
  }
}
