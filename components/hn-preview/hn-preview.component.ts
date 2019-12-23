import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'hn-preview',
  templateUrl: './hn-preview.component.html',
  styleUrls: ['./hn-preview.component.less']
})
export class HnPreviewComponent implements OnInit {
  modeVisible = false;

  @ViewChild('carousel') carousel: any;
  // 展示数据list
  @Input() list: any = [];
  // 展示图片索引
  @Input() index = 0;
  // 是否展示图片
  @Input()
  set visible(val: boolean) {
    this.modeVisible = val;
    setTimeout(() => {
      this.visibleChange.emit(val);
    }, 0);
  }
  get visible() {
    return this.modeVisible;
  }

  @Output() visibleChange: EventEmitter<any> = new EventEmitter();

  imgList: any[] = [];

  constructor() {}

  ngOnInit() {}

  /**
   * 打开弹框，赋值
   */
  handleAfterOpen() {
    this.imgList = this.list;
    setTimeout(() => {
      this.handleGoToIndex(this.index);
    }, 0);
  }

  /**
   * 关闭弹框
   */
  handleCancel() {
    this.imgList = [];
    this.modeVisible = false;
    this.visibleChange.emit(false);
  }

  /**
   * 上一张操作
   */
  handlePrev(): void {
    this.carousel.pre();
  }

  /**
   * 下一张操作
   */
  handleNext(): void {
    this.carousel.next();
  }

  /**
   * 跳转到第index张
   * @param index 索引值
   */
  handleGoToIndex(index: number): void {
    this.carousel.goTo(index);
  }
}
