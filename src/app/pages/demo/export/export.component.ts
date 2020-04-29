import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const require: any;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.less']
})
export class ExportComponent implements OnInit {
  exportApi: any;

  params = {};

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md').default }
  ];

  constructor(private http: HttpClient) {
    this.exportApi = () => {
      return this.http.get('http://test.mgt.campus.huanuo-nsb.com/ipark-company/outputValue/excel/export', this.params);
    };
  }

  ngOnInit() {}
}
