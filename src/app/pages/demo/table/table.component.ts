import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../mock/formList';
import { columns } from './columns';

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
    { title: 'JS', markdown: require('raw-loader!./docs/base/js.md') }
  ];

  interfaceTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/interface/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/interface/js.md') }
  ];

  renderTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/render/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/render/js.md') }
  ];

  virtualTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/virtual/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/virtual/js.md') }
  ];

  dropTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/drop/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/drop/js.md') }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
