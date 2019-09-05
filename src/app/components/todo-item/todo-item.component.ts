// tslint:disable-next-line: quotemark
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
// tslint:disable-next-line: quotemark
import { TodoService } from "../../services/todo.service";

// tslint:disable-next-line: quotemark
import { Todo } from "src/app/models/Todo";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-todo-item",
  // tslint:disable-next-line: quotemark
  templateUrl: "./todo-item.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      // tslint:disable-next-line: quotemark
      "is-complete": this.todo.completed
    };

    return classes;
  }

  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    // tslint:disable-next-line: no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
