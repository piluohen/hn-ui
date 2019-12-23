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

@Component({
  selector: 'hn-detail-list',
  templateUrl: './hn-detail-list.component.html',
  exportAs: 'hnDetailList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hn-detail-list.component.less']
})
export class HnDetailListComponent implements OnInit {
  detailList: any[] = [];

  @Input()
  set list(val: any) {
    this.detailList = val;
    setTimeout(() => {
      this.change.emit(val);
    }, 0);
  }

  get list() {
    return this.detailList;
  }

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
