import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<string | null>(null);
  userObserver: Observable<string> = this.user.asObservable();

  dataFetchflag = new BehaviorSubject<boolean>(false);
  dataFetchflagObserver: Observable<boolean> = this.dataFetchflag.asObservable();

  constructor(private http: HttpClient) { }

  getUser(): Observable<string> {
    return this.userObserver;
  }

  getDataFetchType(): Observable<boolean> {
    return this.dataFetchflagObserver;
  }

  setUser(data: string | null): void {
    this.user.next(data);
  }

  setDataFetchFlag(data: boolean) {
    this.dataFetchflag.next(data);
  }

  getTodosAfter() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}
