import { Component, OnInit, ViewChild } from '@angular/core';
import { formList } from '../../../mock/formList';

declare const require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @ViewChild('form', { static: true }) form: any;

  mode = 'grid';

  hasExplain = true;

  hasValidator = true;

  disabled = false;

  labelWidth = '100px';

  params: any = {
    input: '12',
    year: new Date()
  };

  jsonParams = {};

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md').default }
  ];

  btnList: any[] = ['horizontal', 'vertical', 'inline', 'grid', 'grid-vertical'];

  hasExplainList: any[] = [
    { label: '开启文字错误提示', value: true },
    { label: '关闭文字错误提示', value: false }
  ];

  hasValidatorList: any[] = [
    { label: '开启校验', value: true },
    { label: '关闭校验', value: false }
  ];

  disabledList: any[] = [
    { label: '禁用表单', value: true },
    { label: '非禁用', value: false }
  ];

  formList: any[] = formList;

  catalogList: any[] = [
    { id: 'base', title: '表单示例' },
    { id: 'api', title: 'API' }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.params = {
        input: '1245',
        inputNumber: 45,
        year: new Date(),
        checkbox: ['1']
      };
      this.jsonParams = JSON.stringify(this.params);
    }, 1000);
  }

  handleTabChange(data): void {
    this.mode = data;
  }

  handleClick(): void {
    this.form.submitForm();
  }

  handleReset(): void {
    this.form.resetForm();
  }

  handleClear(): void {
    this.form.clearForm();
    this.params = {};
    this.jsonParams = JSON.stringify(this.params);
  }

  handleSubmit(event: any) {
    this.params = { ...this.params, ...event };
    this.jsonParams = JSON.stringify(this.params);
  }
}
