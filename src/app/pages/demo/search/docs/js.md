```JS
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../mock/formList';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  params = {};

  formList: any[] = formList; // 格式参考form

  constructor(private http: HttpService) {}

  ngOnInit() {}

  /**
   * 搜索方法
   * @param data 搜索数据
   */
  handleSearch(data: any): void {
    this.params = Utils.filterEmptyObj({ ...this.params, ...data });
    console.log(this.params);
  }
}


```
