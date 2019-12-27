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
  selector: 'hn-form',
  exportAs: 'hnForm',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-form.component.html'
})
export class HnFormComponent implements OnInit, OnChanges {
  @Input() mode = 'grid'; // 'horizontal'｜'vertical'｜'inline' | 'grid'

  @Input() labelWidth = '100px';

  @Input() formList: any = [];

  @Input() params: any = {};

  @Input() hasExplain = true; // 是否开启文字提示

  @Output() search: EventEmitter<any> = new EventEmitter();

  modeVisible: any = true;

  form: any = {};

  resetForm: any = [];

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm = JSON.parse(JSON.stringify(this.formList));
    this.initForm();
  }

  ngOnChanges(changes: any) {
    if (changes.params) {
      const { currentValue, firstChange } = changes.params;
      if (!firstChange) {
        this.params = currentValue;
        this.initFormParams();
      }
    }
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
        form[item.key] = [null, item.validators || [Validators.required]];
      }
    });
    return form;
  }

  /**
   * 设置form默认值
   */
  initFormParams(): void {
    Object.keys(this.validateForm.controls).forEach(key => {
      const value = this.params[key];
      this.validateForm.controls[key].setValue(value);
    });
  }

  /**
   * label Style
   */
  labelStyle(width: any) {
    let style = {};
    if (this.mode === 'horizontal') {
      style = {
        flex: `0 0 ${width}`
      };
    }
    return style;
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
    if (this.validateForm.controls) {
      for (const key in this.validateForm.controls) {
        if (key) {
          this.validateForm.controls[key].markAsDirty();
          this.validateForm.controls[key].updateValueAndValidity();
        }
      }
    }
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      const value = this.validateForm.value;
      const params: any = { ...this.params, ...value };
      this.search.emit(params);
    }
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
        params[item.key] = data[item.key];
      }
    });
    return params;
  }
}
