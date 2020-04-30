import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Output
} from '@angular/core';

@Component({
  selector: 'hn-img-list',
  exportAs: 'hnImgList',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-img-list.component.html'
})
export class HnImgListComponent implements OnInit {
  visible: Boolean = false;

  showIndex: Number = 0;

  @Input() list: any[] = [];

  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClick(item: any, index: any): void {
    this.visible = true;
    this.showIndex = index;
    this.itemClick.emit({ item, index });
  }
}
