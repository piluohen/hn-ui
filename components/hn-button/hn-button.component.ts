import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'hn-button',
  exportAs: 'hnButton',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-button.component.html'
})
export class HnButtonComponent implements OnInit {
  @Input() type = 'default';
  @Input() ghost = false;
  @Input() loading = false;
  @Input() shape = '';
  @Input() size = 'default';
  @Input() block = false;
  @Input() icon = '';
  @Input() disabled = false;

  @Output() click: EventEmitter<any> = new EventEmitter();

  angClass: any;

  constructor() {}

  ngOnInit() {
    this.setClass();
  }

  setClass() {
    this.angClass = {
      'hn-btn': true,
      [`hn-btn-${this.type}`]: this.type
    };
  }

  /**
   * 点击事件
   */
  handleClick(): void {
    this.click.emit();
  }
}
