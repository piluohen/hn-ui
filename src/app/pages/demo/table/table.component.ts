import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const require: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md').default;

  baseTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/base/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/base/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  interfaceTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/interface/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/interface/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  localTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/local/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/local/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  renderTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/render/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/render/js.md').default }
  ];

  virtualTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/virtual/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/virtual/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  dropTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/drop/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/drop/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  expandTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/expand/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/expand/js.md').default },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md').default }
  ];

  catalogList: any[] = [
    { id: 'base', title: '基础示例' },
    { id: 'interface', title: '远程请求示例' },
    { id: 'local', title: '本地自定义请求' },
    { id: 'expand', title: '展开收缩' },
    { id: 'render', title: '筛选、过滤、排序' },
    { id: 'drop', title: '拖拽' },
    { id: 'virtual', title: '虚拟滚动' },
    { id: 'api', title: 'API' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
