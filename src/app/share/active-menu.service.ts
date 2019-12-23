import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveMenuService {
  private observ: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  /**
   * 发布事件
   * @param id
   */
  publish(id ) {
    this.observ.next(id);
  }

  /**
   * 关注事件
   * @param {(value) => void} next
   * @param {() => void} complete
   */
  subscribe(next?: (value) => void, complete?: () => void) {
    this.observ.subscribe(next, null, complete);
  }
}
