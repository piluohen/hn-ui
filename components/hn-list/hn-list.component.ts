import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hn-list',
  exportAs: 'hnList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-list.component.html'
})
export class HnListComponent implements OnInit {
  @Input() icon: string;
  @Input() list: any[] = [];

  constructor() {}

  ngOnInit() {}
}
