import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hn-detail-list',
  templateUrl: './hn-detail-list.component.html',
  exportAs: 'hnDetailList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HnDetailListComponent implements OnInit, OnChanges {
  detailList: any[] = [];

  @Input() mode = 'horizontal'; // 'horizontal'｜'vertical'
  @Input() colon = '：';
  @Input() render: any = {};
  @Input() list: any[] = [];
  @Input() data: any = {};

  constructor() {}

  ngOnInit() {
    this.setDataMethod();
  }

  ngOnChanges(changes: any) {
    if (changes.data) {
      const { currentValue, firstChange } = changes.data;
      if (!firstChange) {
        this.data = currentValue;
        this.setDataMethod();
      }
    }
  }

  getClass(item: any) {
    const className = `hn-detail-${this.mode}`;
    const obj = {};
    obj[className] = true;
    return obj;
  }

  /**
   * 设置数据方法
   */
  setDataMethod() {
    this.detailList = this.list.map(item => {
      if (item.renderKey) {
        item.render = this.render[item.renderKey];
      }
      const value = this.data[item.key];
      item.value = item.format ? item.format(this.data) : value;
      return item;
    });
  }
}
