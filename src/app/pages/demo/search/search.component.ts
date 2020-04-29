import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../mock/formList';

declare const require: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  params = {};

  jsonParams: any;

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md').default }
  ];

  formList: any[] = formList;

  constructor() {}

  ngOnInit() {}

  /**
   * 搜索方法
   * @param data 搜索数据
   */
  handleSearch(data: any): void {
    this.params = Utils.filterEmptyObj({ ...data });
    this.jsonParams = JSON.stringify(this.params);
  }
}
