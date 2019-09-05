// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line: quotemark
import { TodoService } from "../../services/todo.service";
// tslint:disable-next-line: quotemark
import { Todo } from "../../models/Todo";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-todos",
  // tslint:disable-next-line: quotemark
  templateUrl: "./todos.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    // tslint:disable-next-line: no-shadowed-variable
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
