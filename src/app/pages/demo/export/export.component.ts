import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

declare const require: any;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.less']
})
export class ExportComponent implements OnInit {
  exportApi: any;

  params = {};

  apiMarkdown = require('raw-loader!./docs/api.md');

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md') }
  ];

  constructor(private http: HttpService) {
    this.exportApi = () => {
      return this.http.get('http://test.mgt.campus.huanuo-nsb.com/ipark-company/outputValue/excel/export', this.params);
    };
  }

  ngOnInit() {}
}
