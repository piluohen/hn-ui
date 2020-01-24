import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const require: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md');

  baseTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/base/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/base/js.md') },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md') }
  ];

  interfaceTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/interface/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/interface/js.md') },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md') }
  ];

  renderTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/render/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/render/js.md') }
  ];

  virtualTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/virtual/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/virtual/js.md') },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md') }
  ];

  dropTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/drop/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/drop/js.md') },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md') }
  ];

  expandTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/expand/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/expand/js.md') },
    { title: 'columns', markdown: require('raw-loader!./docs/columns.md') }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
