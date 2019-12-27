import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hn-search',
  exportAs: 'hnSearch',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-search.component.html'
})
export class HnSearchComponent implements OnInit {
  @ViewChild('form') form: any;

  @Input() formList: any = [];

  @Input() keyword = 'searchContent';

  @Input() placeholder = '请输入查询条件';

  @Input() render: any;

  @Input() itemRender: any;

  @Output() search: EventEmitter<any> = new EventEmitter();

  params: any = {};

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
    this.form.resetForm();
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
    this.form.submitForm();
  }

  handleSubmit(event: any): void {
    const params = { ...this.params, ...event };
    this.search.emit(params);
  }
}
