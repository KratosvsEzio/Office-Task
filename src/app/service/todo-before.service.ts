import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoBeforeService implements Resolve<any> {

  constructor(private _http: HttpClient) { }

  resolve() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
