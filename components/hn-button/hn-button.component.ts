import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'hn-button',
  templateUrl: './hn-button.component.html',
  styleUrls: ['./hn-button.component.less']
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
