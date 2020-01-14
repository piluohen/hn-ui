import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  Inject,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { NzScrollService } from 'ng-zorro-antd';
import { isInContainer } from 'hn-ui/core';

@Component({
  selector: 'hn-image',
  exportAs: 'hnImage',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-image.component.html'
})
export class HnImageComponent implements OnInit, OnDestroy {
  @ViewChild('hnImage') hnImage: any;

  @Input() src: string;
  @Input() alt: string;
  @Input() fit: string;
  @Input() lazy = false;
  @Input() noData: string | HTMLElement = '加载失败';

  @Input()
  set hnTarget(el: string | HTMLElement) {
    this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
    if (this.lazy) {
      this.registerScrollEvent();
    } else {
      this.loadImage();
    }
  }

  @Output() error: EventEmitter<any> = new EventEmitter();

  loading = false;
  isError = false;
  imageWidth = 0;
  imageHeight = 0;
  showViewer = false;

  showEmpty = true;

  dataSrc = '';

  private scroll$: Subscription | null = null;
  private target: HTMLElement | null = null;

  constructor(
    private platform: Platform,
    @Inject(DOCUMENT) private doc: any,
    private scrollSrv: NzScrollService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getNoData();
    if (this.lazy) {
      this.registerScrollEvent();
    } else {
      this.loadImage();
    }
  }

  ngOnDestroy(): void {
    this.removeScrollListen();
  }

  /**
   * 获取无数据状态配置
   */
  getNoData() {
    if (this.noData instanceof TemplateRef) {
      this.showEmpty = false;
    } else {
      this.showEmpty = true;
    }
  }

  /**
   * 获取样式配置
   */
  getStyle() {
    return {
      'object-fit': this.fit
    };
  }

  /**
   * 加载图片
   */
  private loadImage() {
    this.loading = true;
    this.isError = false;
    const img = new Image();
    img.onload = e => this.handleLoad(e, img);
    img.onerror = this.handleError.bind(this);
    ['src', 'alt', 'fit'].forEach(item => {
      img.setAttribute(item, this[item]);
    });
    img.src = this.src;
  }

  /**
   * 加载完成
   * @param e 事件
   * @param img 图片
   */
  private handleLoad(e: any, img: any) {
    this.imageWidth = img.width;
    this.imageHeight = img.height;
    this.loading = false;
    this.dataSrc = img.src;
    this.cd.markForCheck();
  }

  /**
   * 加载失败
   * @param e 事件
   */
  private handleError(e: any) {
    this.loading = false;
    this.isError = true;
    this.cd.markForCheck();
    this.error.emit(e);
  }

  /**
   * 获取滚动区域元素
   */
  private getTarget(): HTMLElement | Window {
    return this.target || window;
  }

  /**
   * 懒加载方法，判断是否显示
   */
  private handleLazyLoad() {
    const el = this.hnImage.nativeElement;
    const show = isInContainer(el, this.getTarget());
    if (show) {
      this.loadImage();
      this.removeScrollListen();
    }
  }

  /**
   * 移除滚动事件监听
   */
  private removeScrollListen(): void {
    if (this.scroll$) {
      this.scroll$.unsubscribe();
    }
  }

  /**
   * 注册滚动事件
   */
  private registerScrollEvent(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeScrollListen();
    this.handleLazyLoad();
    this.scroll$ = fromEvent(this.getTarget(), 'scroll')
      .pipe(throttleTime(20), distinctUntilChanged())
      .subscribe(() => this.handleLazyLoad());
  }
}
