import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { formList } from '../../../mock/formList';

declare const require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @ViewChild('form') form: any;

  params: any = {
    input: '12',
    year: new Date()
  };

  jsonParams = {};

  apiMarkdown = require('raw-loader!./docs/api.md');

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md') }
  ];

  formList: any[] = formList;

  constructor(private http: HttpService) {}

  ngOnInit() {
    setTimeout(() => {
      this.params = {
        input: '1245',
        inputNumber: 45,
        year: new Date()
      };
      this.jsonParams = JSON.stringify(this.params);
    }, 1000);
  }

  handleClick(): void {
    this.form.submitForm();
  }

  handleReset(): void {
    this.form.resetForm();
  }

  handleSubmit(event: any) {
    this.params = { ...this.params, ...event };
    this.jsonParams = JSON.stringify(this.params);
  }
}
