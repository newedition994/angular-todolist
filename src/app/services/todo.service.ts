// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { Observable } from "rxjs";
// tslint:disable-next-line: quotemark
import { HttpClient, HttpHeaders } from "@angular/common/http";

// tslint:disable-next-line: quotemark
import { Todo } from "../models/Todo";

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class TodoService {
  // tslint:disable-next-line: quotemark
  todosUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
