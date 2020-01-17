import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
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

  apiMarkdown = require('raw-loader!./docs/api.md');

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md') }
  ];

  formList: any[] = formList;

  constructor(private http: HttpService) {}

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
