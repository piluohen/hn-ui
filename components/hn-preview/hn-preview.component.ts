import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'hn-preview',
  exportAs: 'hnPreview',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-preview.component.html'
})
export class HnPreviewComponent implements OnInit {
  modeVisible = false;

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

  imgSrc = '';

  activeIndex = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  /**
   * 打开弹框，赋值
   */
  handleAfterOpen() {
    this.imgList = this.list;

    setTimeout(() => {
      this.activeIndex = this.index;
      this.change();
    }, 0);
  }

  /**
   * 关闭弹框
   */
  cancel() {
    this.imgList = [];
    this.imgSrc = '';
    this.activeIndex = 0;
    this.modeVisible = false;
    this.visibleChange.emit(false);
  }

  /**
   * 上一张操作
   */
  prev(): void {
    const len = this.imgList.length;
    this.activeIndex = (this.activeIndex - 1 + len) % len;
    this.change();
  }

  /**
   * 下一张操作
   */
  next(): void {
    const len = this.imgList.length;
    this.activeIndex = (this.activeIndex + 1) % len;
    this.change();
  }

  /**
   * 改变imgSrc
   */
  change(): void {
    this.imgSrc = this.imgList[this.activeIndex].url;
    this.cd.markForCheck();
  }
}
