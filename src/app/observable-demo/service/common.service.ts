import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private colorSubject = new Subject<string>();

  get color$() {
    return this.colorSubject.asObservable();
  }
  constructor() {}

  setColor(color: string) {
    this.colorSubject.next(color);
  }
}
