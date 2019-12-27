import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'hn-scroll-list',
  exportAs: 'hnScrollList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-scroll-list.component.html',
  animations: []
})
export class HnScrollListComponent implements OnInit {
  // 滚动数据
  @Input() data: any[] = [];
  // 滚动项数量
  @Input() count = 6;
  // 一次滚动个数
  @Input() scrollCount = 1;
  // 滚动项高度
  @Input() itemHeight = 60;
  // 滚动动画速度
  @Input() speed = 300;
  // 滚动延迟
  @Input() delay = 2000;

  @Input() renderItem: TemplateRef<void>;
  // 滚动项click事件
  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  y = 0;
  curr = 0;
  list: any = [];
  nextList: any = [];
  totalList: any = [];
  inAnimation = false;
  inEnter = false;

  initContentStyle = {
    transition: '',
    marginTop: '0px'
  };
  contentStyle = {};

  contentHeight: any;
  scrollHeight: any;
  listStyle: any;
  itemStyle: any;

  timer: any = null;

  constructor() {}

  ngOnInit() {
    this.initData();
    this.reset();
  }

  initData() {
    this.contentHeight = this.itemHeight * this.count;
    this.scrollHeight = this.scrollCount * this.itemHeight;
    this.listStyle = {
      height: this.contentHeight + 'px'
    };
    this.itemStyle = {
      height: this.itemHeight + 'px'
    };
  }

  /**
   * 重置滚动
   */
  reset() {
    this.clearScroll();
    this.y = 0;
    this.curr = 0;
    this.inAnimation = false;
    this.contentStyle = { ...this.initContentStyle };
    this.loop();
  }

  /**
   * 鼠标over操作
   */
  handleMouseover() {
    this.inEnter = true;
    this.clearScroll();
  }

  /**
   * 鼠标移出操作
   */
  handleMouseout() {
    this.inEnter = false;
    this.loop();
  }

  /**
   * 动画结束
   */
  handleEnd() {
    this.inAnimation = false;
    this.curr = 0;
    this.contentStyle = { ...this.initContentStyle };
    this.loop();
  }

  /**
   * 滚动动画
   */
  loop() {
    if (this.inEnter) {
      return;
    }
    this.getList();
    this.clearScroll();
    if (this.data.length >= this.count) {
      this.getNextList();
      this.totalList = [...this.list, ...this.nextList];

      this.timer = setTimeout(() => {
        this.inAnimation = true;
        this.y += this.scrollCount;
        this.curr += this.scrollCount;
        this.contentStyle = {
          transition: this.inAnimation ? this.speed + 'ms' : '',
          marginTop: -(this.curr * this.itemHeight) + 'px'
        };
      }, this.delay);
    }
  }

  /**
   * 清除滚动
   */
  clearScroll() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  /**
   * 获取列表
   */
  getList() {
    const { y, count, data } = this;
    const curr = y % data.length;
    let list = data.slice(curr, curr + count);
    // 补不足
    if (list.length < count && this.data.length >= count) {
      list = [...list, ...data.slice(0, count - list.length)];
    }
    this.list = list;
  }

  /**
   * 获取下部分列表
   */
  getNextList() {
    const { y, count, scrollCount, data } = this;
    const curr = (y + count) % data.length;
    let nextList = data.slice(curr, curr + scrollCount);
    // 补不足
    if (nextList.length < scrollCount) {
      nextList = [...nextList, ...data.slice(0, scrollCount - nextList.length)];
    }
    this.nextList = nextList;
  }

  /**
   * 点击滚动项
   * @param row 滚动项数据
   */
  handleClick(row: any) {
    this.itemClick.emit(row);
  }
}
