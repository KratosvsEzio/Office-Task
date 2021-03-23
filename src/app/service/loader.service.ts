import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLoader(): Observable<boolean> {
    return this.loader.asObservable();
  }

  setLoader(data: boolean) {
    this.loader.next(data);
  }
}
