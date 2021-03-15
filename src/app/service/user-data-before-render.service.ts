import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataBeforeRenderService implements Resolve<any> {

  constructor(private _http: HttpClient) { }

  resolve() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos')
  }

}
