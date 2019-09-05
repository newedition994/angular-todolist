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
  // tslint:disable-next-line: quotemark
  todosUrl = "https://jsonplaceholder.typicode.com/todos";
  // tslint:disable-next-line: quotemark
  todosLimit = "?_limit=10";

  constructor(private http: HttpClient) {}

  // Get Todod
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
