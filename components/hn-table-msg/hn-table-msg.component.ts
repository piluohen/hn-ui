import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'hn-table-msg',
  exportAs: 'hnTableMsg',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-table-msg.component.html'
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
