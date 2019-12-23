import { Component, OnInit, Input, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hn-img-list',
  exportAs: 'hnImgList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-img-list.component.html',
  styleUrls: ['./hn-img-list.component.less']
})
export class HnImgListComponent implements OnInit {
  visible: Boolean = false;

  showIndex: Number = 0;

  @Input() list: any[] = [];

  constructor() {}

  ngOnInit() {}

  handleClick(val, index): void {
    this.visible = true;
    this.showIndex = index;
  }
}
