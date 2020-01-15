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
  @Input() mode = 'grid'; // 'horizontal'｜'vertical'｜'inline' | 'grid' | 'grid-vertical'

  @Input() labelWidth = '100px';

  @Input() formList: any = [];

  @Input() params: any = {};

  @Input() hasExplain = true; // 是否开启文字提示

  @Input() hasValidator = true;

  @Input() render: any;

  @Output() hnSubmit: EventEmitter<any> = new EventEmitter();

  modeVisible: any = true;

  oldParams: any = {};

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formList = this.initFormList([...this.formList]);
    this.initForm();
    this.oldParams = JSON.stringify(this.params);
    this.initFormParams();
  }

  ngOnChanges(changes: any) {
    if (changes.params) {
      const { currentValue, firstChange } = changes.params;
      if (!firstChange) {
        this.params = currentValue;
        this.oldParams = JSON.stringify(this.params);
        this.initFormParams();
      }
    }
  }

  /**
   * 初始化formList
   */
  initFormList(arr: any) {
    const list = [];
    arr.forEach((item: any) => {
      if (item.children) {
        item.children = this.initFormList(item.children);
      }
      if (item.renderKey) {
        item.render = this.render[item.renderKey];
      }
      list.push(item);
    });
    return list;
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
        form[item.key] = [null, item.validators || []];
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
   * 提交表单
   */
  submitForm(): void {
    if (this.hasValidator) {
      if (this.validateForm.controls) {
        for (const key in this.validateForm.controls) {
          if (key) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
          }
        }
      }
      if (this.validateForm.valid) {
        this.submitData();
      }
    } else {
      this.submitData();
    }
  }

  /**
   * 提交数据
   */
  submitData(): void {
    const value = this.validateForm.value;
    const params: any = { ...this.params, ...value };
    this.hnSubmit.emit(params);
  }

  /**
   * 获取数据
   */
  getParams() {
    return this.params;
  }

  /**
   * 重置表单，恢复至初始状态
   */
  resetForm(): void {
    this.validateForm.reset();
    this.params = JSON.parse(this.oldParams);
    this.initFormParams();
  }

  /**
   * 清空表单
   */
  clearForm(): void {
    this.validateForm.reset();
    this.params = {};
    this.initFormParams();
  }
}
