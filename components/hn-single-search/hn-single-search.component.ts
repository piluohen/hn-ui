import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hn-single-search',
  templateUrl: './hn-single-search.component.html',
  styleUrls: ['./hn-single-search.component.less']
})
export class HnSingleSearchComponent implements OnInit {
  @Input() formList: any = [];

  @Input() render: any;

  @Input() style: any = {};

  @Output() search: EventEmitter<any> = new EventEmitter();

  modeVisible: any = false;

  form: any = {};

  resetForm: any = [];

  allChecked = false;
  indeterminate = false;

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm = JSON.parse(JSON.stringify(this.formList));
    this.initForm();
  }

  /**
   * 初始化表单
   */
  initForm() {
    this.form = this.setInitForm(this.formList);
  }

  /**
   * 设置初始化表单数据
   * @param arr 数据
   */
  setInitForm(arr: any[]) {
    const form: any = {};
    arr.forEach(item => {
      if (item.type === 'checkbox') {
        form[item.key] = [...Object.assign([], item.options)];
        form[item.checkAll] = false;
        form[item.indeterminate] = false;
      } else {
        form[item.key] = item.value || null;
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
   * picker改变
   */
  handlePickerChange($event: any, item: any): void {
    this.submitForm();
  }

  /**
   * Input 改变
   */
  handleKeyupEnter() {
    this.submitForm();
  }

  /**
   * checkbox改变
   */
  handleCheckboxChange($event: any, data: any): void {
    this.setCheckbox(data);
    this.submitForm();
  }

  /**
   * 全选操作
   * @param $event 值
   * @param data 数据
   */
  updateAllChecked($event: any, data: any) {
    data.options.forEach((item: any) => {
      item.checked = $event;
    });
    if (data.checkAll) {
      this.form[data.checkAll] = $event;
    }
    this.submitForm();
  }

  /**
   * 设置checkbox值
   * @param data 数据
   */
  setCheckbox(data: any) {
    if (data.options.every(item => item.checked)) {
      this.form[data.checkAll] = true;
      this.form[data.indeterminate] = false;
    } else if (data.options.every(item => !item.checked)) {
      this.form[data.checkAll] = false;
      this.form[data.indeterminate] = false;
    } else {
      this.form[data.indeterminate] = true;
    }
  }

  /**
   * 提交表单
   */
  submitForm(): void {
    const value = this.form;
    const params: any = { ...this.setParams(this.formList, value) };
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
