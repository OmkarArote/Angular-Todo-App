import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();
  strikeBtnText = "Mark As Done";
  constructor() {}

  ngOnInit(): void {
  }
  _onDeleteButtonPressed(todo : Todo){
    console.log("Delete button pressed: Sr No. " + todo.sno)
    this.todoDelete.emit(todo);
  }
  _onDoneButtonPressed(todo : Todo){
    console.log("Done button pressed: Sr No. " + todo.sno)
    this.todoDone.emit(todo);
    if(todo.active == true){
      this.strikeBtnText = "Mark As Done"
    } else if (todo.active == false){
      this.strikeBtnText = "Mark As Not Done"
    }
  }
}
