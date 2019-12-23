import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';
@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit, OnChanges {
  @Input() scrollClass: String = 'active';

  @Input() scrollClose: Boolean = false;

  @Input() scrollType: any = 'client'; // client 相对于屏幕，scroll 相对于body

  @Input() scrollHeight = 200;

  @Output() scrollChange: EventEmitter<any> = new EventEmitter();

  scroll$: any;

  clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.scrollClose) {
      this.registerScrollEvent();
    } else {
      this.removeScrollListen();
    }
  }

  ngOnChanges(changes: any) {
    if (changes.scrollClose) {
      const { currentValue, firstChange } = changes.scrollClose;
      if (!firstChange) {
        if (!currentValue) {
          this.registerScrollEvent();
        } else {
          this.removeScrollListen();
        }
      }
    }
  }

  /**
   * 移除滚动事件监听
   */
  removeScrollListen(): void {
    if (this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  /**
   * 监听滚动事件
   */
  registerScrollEvent(): void {
    this.removeScrollListen();
    this.scroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(10), distinctUntilChanged())
      .subscribe(event => {
        if (this.scrollType === 'scroll') {
          const { top } = document.body.getBoundingClientRect();
          this.scrollMethod(top < 0 - this.scrollHeight);
        } else {
          const { top } = this.el.nativeElement.getBoundingClientRect();

          this.scrollMethod(top < this.clientHeight - this.scrollHeight);
        }
      });
  }

  scrollMethod(show: Boolean = false): void {
    const ele = this.el.nativeElement;
    if (show) {
      ele.classList.add(this.scrollClass);
    } else {
      ele.classList.remove(this.scrollClass);
    }
    this.scrollChange.emit(show);
  }
}
