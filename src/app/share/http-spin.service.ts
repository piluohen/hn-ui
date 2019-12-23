import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSpinService {
  private observ: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  /**
   * 发布事件
   * @param {boolean} ifShow
   */
  publish(ifShow: boolean ) {
    this.observ.next(ifShow);
  }

  /**
   * 关注事件
   * @param {(value: boolean) => void} next
   * @param {() => void} complete
   */
  subscribe(next?: (value: boolean) => void, complete?: () => void) {
    this.observ.subscribe(next, null, complete);
  }
}
