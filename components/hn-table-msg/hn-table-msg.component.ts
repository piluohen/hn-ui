import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hn-table-msg',
  templateUrl: './hn-table-msg.component.html',
  styleUrls: ['./hn-table-msg.component.less']
})
export class HnTableMsgComponent implements OnInit {
  @Input() check: number;
  @Input() total: number;
  @Output() clear: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClear() {
    this.clear.emit();
  }
}
