// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { Observable } from "rxjs";
// tslint:disable-next-line: quotemark
import { HttpClient, HttpHeaders } from "@angular/common/http";

// tslint:disable-next-line: quotemark
import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: quotemark
    "Content-Type": "application/json"
  })
};

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class TodoService {
  // tslint:disable-next-line: no-inferrable-types
  todosUrl: string =
    // tslint:disable-next-line: quotemark
    "https://jsonplaceholder.typicode.com/todos";
  // tslint:disable-next-line: quotemark
  todosLimit = "?_limit=5";

  constructor(private http: HttpClient) {}

  // Get Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
