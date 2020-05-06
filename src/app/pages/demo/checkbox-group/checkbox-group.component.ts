import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare const require: any;

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.less']
})
export class CheckboxGroupComponent implements OnInit {
  @ViewChild('group', { static: false }) group: any;

  options: any = [];

  value: any = ['A', 'E', 'F'];

  validateForm: FormGroup;

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  baseTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/base/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/base/js.md').default }
  ];

  formTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/form/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/form/js.md').default }
  ];

  catalogList: any[] = [
    { id: 'base', title: '基础用法' },
    { id: 'form', title: 'form表单' },
    { id: 'api', title: 'API' }
  ];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      checkbox: [this.value]
    });
    this.options = ['A', 'B', 'C', 'D', 'E', 'F'].map((item, index) => {
      return { label: `${item}选项`, value: item, disabled: index % 2 === 1 };
    });
  }

  ngOnInit() {}

  handleChange(data: any): void {}

  handleSave(): void {}
}
