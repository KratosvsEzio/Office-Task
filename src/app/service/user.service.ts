import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<string | null>(null);
  userObserver: Observable<string> = this.user.asObservable();

  constructor() { }

  getUser(): Observable<string> {
    return this.userObserver;
  }

  setUser(data: string | null): void {
    this.user.next(data);
  }
}
