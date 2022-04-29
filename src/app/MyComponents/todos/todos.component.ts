import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  msg = 'todos work!';
  todos:Todo[];
  constructor() {
    this.todos = []
  }

  ngOnInit(): void {
  }
  deleteTodo(todo : Todo){
    console.log("The Todo That should be deleted:");
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo : Todo){
    console.log("The Todo That should be added:");
    console.log(todo);
    this.todos.push(todo);
  }
}
