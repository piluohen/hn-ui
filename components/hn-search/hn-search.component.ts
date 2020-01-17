import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd';

@Component({
  selector: 'hn-search',
  exportAs: 'hnSearch',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-search.component.html',
  animations: [slideMotion]
})
export class HnSearchComponent implements OnInit {
  @ViewChild('form') form: any;

  @Input() formList: any = [];
  @Input() keyword = 'searchContent';
  @Input() placeholder = '请输入查询条件';
  @Input() render: any;
  @Input() itemRender: any;
  @Input() params = {};

  @Output() search: EventEmitter<any> = new EventEmitter();

  newParams: any = {};

  modeVisible: any = false;

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  /**
   * 切换高级搜索
   */
  handleToggle(): void {
    this.modeVisible = !this.modeVisible;
  }

  /**
   * 取消操作
   */
  handleCancle(): void {
    this.modeVisible = false;
  }

  /**
   * 重置表单
   */
  handleReset(): void {
    this.form.clearForm();
    const params = {};
    params[this.keyword] = this.params[this.keyword];
    this.search.emit(params);
  }

  /**
   * 确认操作
   */
  handleConfirm(): void {
    this.form.submitForm();
  }

  /**
   * 键盘enter事件
   */
  handleKeyupEnter(): void {
    if (this.modeVisible) {
      this.form.submitForm();
    } else {
      this.search.emit(this.params);
    }
  }

  handleSubmit(event: any): void {
    const params = { ...this.params, ...event };
    this.search.emit(params);
  }
}
