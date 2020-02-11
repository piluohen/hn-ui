import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../../mock/formList';
import { columns } from '../columns';

@Component({
  selector: 'app-table-local',
  templateUrl: './table-local.component.html'
})
export class TableLocalComponent implements OnInit {
  @ViewChild('table') table: any;

  getListApi: any;

  columns: any[] = [...columns];

  tableData: any[] = [];

  total = 0;

  params: any = {
    input1: null
  };

  formList: any[] = formList;

  checkedData: any[] = [];
  numberOfChecked = 0;

  constructor(private http: HttpClient) {
    this.getListApi = (params: any = {}) => {
      return this.http.post('http://test.mgt.campus.huanuo-nsb.com/ipark-cost-service/mock/list', { params });
    };
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const params = {
      name: '2323'
    };
    this.http
      .post('http://test.mgt.campus.huanuo-nsb.com/ipark-cost-service/mock/list?page=1&size=10', { params })
      .subscribe(res => {
        if (res['success']) {
          const data = res['data'];
          this.tableData = data.list;
          this.total = data.total;
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
    this.getList();
  }

  handlePageIndexChange(data: any): void {
    console.log(data);
    this.getList();
  }

  handlePageSizeChange(data: any): void {
    console.log(data);
    this.getList();
  }
}
