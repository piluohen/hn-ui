import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hn-search',
  exportAs: 'hnSearch',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-search.component.html',
  styleUrls: ['./hn-search.component.less']
})
export class HnSearchComponent implements OnInit {
  @Input() formList: any = [];

  @Input() keyword = 'searchContent';

  @Input() placeholder = '请输入查询条件';

  @Input() render: any;

  @Output() search: EventEmitter<any> = new EventEmitter();

  modeVisible: any = false;

  form: any = {};

  resetForm: any = [];

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form[this.keyword] = null;
    this.resetForm = JSON.parse(JSON.stringify(this.formList));
    this.initForm();
  }

  /**
   * 初始化表单
   */
  initForm() {
    const form: any = this.setInitForm(this.formList);
    this.validateForm = this.fb.group({ ...form });
  }

  /**
   * 设置初始化表单数据
   * @param arr 数据
   */
  setInitForm(arr: any) {
    let form: any = {};
    arr.forEach(item => {
      if (item.children) {
        form = { ...form, ...this.setInitForm(item.children) };
      } else {
        if (item.type === 'checkbox') {
          form[item.key] = [Object.assign([], item.options)];
        } else {
          form[item.key] = [null];
        }
      }
    });
    return form;
  }

  /**
   * 过滤数组
   * @param data 值：数组
   */
  filterArr(data: any[]) {
    return data
      .filter(item => {
        return item.checked;
      })
      .map(item => {
        return item.value;
      });
  }

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
    this.formList = JSON.parse(JSON.stringify([...this.resetForm]));
    this.initForm();
    this.search.emit({ ...this.form });
  }

  /**
   * 确认操作
   */
  handleConfirm(): void {
    this.submitForm();
  }

  /**
   * 键盘enter事件
   */
  handleKeyupEnter(): void {
    this.submitForm();
  }

  /**
   * 提交表单
   */
  submitForm(): void {
    const value = this.validateForm.value;
    const params: any = { ...this.form, ...this.setParams(this.formList, value) };
    this.search.emit(params);
  }

  /**
   * 设置data
   * @param data 数据
   */
  setParams(arr: any, data: any) {
    let params = {};
    arr.forEach(item => {
      if (item.children) {
        params = { ...params, ...this.setParams(item.children, data) };
      } else {
        if (item.type === 'checkbox') {
          const str = this.filterArr(data[item.key]).join(',') || null;
          params[item.key] = str;
        } else {
          params[item.key] = data[item.key];
        }
      }
    });
    return params;
  }
}
