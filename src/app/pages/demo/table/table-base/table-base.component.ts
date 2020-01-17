import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../../mock/formList';
import { columns } from '../columns';

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html'
})
export class TableBaseComponent implements OnInit {
  @ViewChild('table') table: any;

  columns: any[] = columns;

  tableData: any[] = [];

  params: any = {};

  formList: any[] = formList;

  checkedData: any[] = [];
  numberOfChecked = 0;

  constructor(private http: HttpClient) {}

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

  /**
   * check选中操作
   * @param data 数据
   */
  handleCheckChange(data: any) {
    this.checkedData = data;
    this.numberOfChecked = data.length;
  }

  /**
   * 清除选中
   */
  handleClear() {
    this.table.clearChecked();
  }

  /**
   * 搜索方法
   * @param data 搜索数据
   */
  handleSearch(data: any): void {
    this.params = Utils.filterEmptyObj({ ...this.params, ...data });
    this.getData();
  }
}
