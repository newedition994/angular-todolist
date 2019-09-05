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
}
