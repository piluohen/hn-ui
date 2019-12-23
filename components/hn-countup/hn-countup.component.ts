import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'hn-countup',
  exportAs: 'hnCountup',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span class="hn-countup"></span>
  `
})
export class HnCountupComponent implements OnInit, OnChanges {
  instance = null;

  // 开始值
  @Input() startVal = 0;
  // 结束值
  @Input() endVal: number;
  // 持续时间
  @Input() duration = 1000;
  // 小数位
  @Input() decimalPlaces = 0;
  // 完全展示回调
  @Output() ready: EventEmitter<any> = new EventEmitter();

  delay: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.delay = this.duration / 1000;
    this.create();
  }

  ngOnChanges(changes: any) {
    const value = changes.endVal.currentValue;
    if (this.instance) {
      this.instance.update(value);
    }
  }

  ngOnDestory() {
    this.instance = null;
  }

  // 生成
  create() {
    if (this.instance) {
      return;
    }
    const dom = this.el.nativeElement.querySelector('.hn-countup');
    const instance = new CountUp(dom, this.endVal, {
      startVal: this.startVal,
      duration: this.delay,
      decimalPlaces: this.decimalPlaces
    });
    if (instance.error) {
      return;
    }
    this.instance = instance;
    if (this.delay < 0) {
      this.ready.emit({ instance, CountUp });
      return;
    }
    setTimeout(() => {
      instance.start(() => {
        this.ready.emit({ instance, CountUp });
      });
    }, this.delay);
  }
}
