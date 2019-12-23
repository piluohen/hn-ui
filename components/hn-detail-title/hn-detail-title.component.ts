import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hn-detail-title',
  exportAs: 'hnDetailTitle',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-detail-title.component.html',
  styleUrls: ['./hn-detail-title.component.less']
})
export class HnDetailTitleComponent implements OnInit {
  @Input() icon: String = 'star';
  @Input() theme: String = 'outline';
  @Input() title: String = '';
  constructor() {}

  ngOnInit() {}
}
