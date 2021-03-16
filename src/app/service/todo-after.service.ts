import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoAfterService {

  constructor(private _http: HttpClient) { }

  getTodosAfter() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
