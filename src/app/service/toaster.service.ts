import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private opt = []
  private options = new BehaviorSubject<Array<any>>([]);

  constructor() { }

  getOptions() {
    return this.options.asObservable();
  }

  setOptions(data) {
    if(data.length === undefined) {
      this.opt.unshift(data);
    } else {
      this.opt = data;
    }
    this.options.next(this.opt);
    console.log(this.opt)
  }

}
