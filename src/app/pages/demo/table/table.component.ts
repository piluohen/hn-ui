import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const require: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @ViewChild('baseTable') baseTable: any;

  @ViewChild('interfaceTable') interfaceTable: any;

  getListApi: any;

  columns: any[] = [
    { title: '名称', key: 'name' },
    { title: '性别', key: 'gender' },
    { title: '年龄', key: 'age' },
    { title: '出生日期', key: 'createTime' },
    { title: '链接', key: 'link', renderKey: 'linkTemp' },
    { title: '操作', right: '0px', width: '80px', renderKey: 'operateTemp' }
  ];

  tableData: any[] = [];

  params: any = {};

  apiMarkdown = require('raw-loader!./docs/api.md');

  baseTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/base/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/base/js.md') }
  ];

  interfaceTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/interface/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/interface/js.md') }
  ];

  constructor(private http: HttpClient) {
    this.getListApi = (params: any = {}) => {
      return this.http.get('http://test.mgt.campus.huanuo-nsb.com/ipark-cost-service/mock/list', { params });
    };
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const params: any = {
      pageSize: 10,
      pageNo: 1
    };
    this.http
      .get('http://test.mgt.campus.huanuo-nsb.com/ipark-cost-service/mock/list', params)
      .subscribe((res: any) => {
        if (res.success) {
          const data = res.data.list;
          this.tableData = data;
        }
      });
  }

  handleView(scope: any = {}): void {
    window.open(scope.data[scope.item.key]);
  }

  handleEdit(type: string, data: any = {}) {
    console.log(type, data);
  }
}
