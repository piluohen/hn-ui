```JS
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/share/util/utils';
import { formList } from '../../../../mock/formList';
import { columns, item } from '../columns';

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html'
})
export class TableBaseComponent implements OnInit {
  @ViewChild('table', { static: true }) table: any;

  size = 'default';
  sizeList: any[] = ['default', 'middle', 'small'];

  showCheckbox = false;
  showPagination = true;
  pagePosition = 'bottom';
  positionList: any[] = ['top', 'bottom', 'both'];
  showSizeChanger = true;
  showQuickJumper = false;
  hideOnSinglePage = false;
  simplePage = false;
  bordered = false;
  draggable = false;
  pagination = {
    pageSize: 10,
    pageIndex: 1
  };

  columns: any[] = [...columns];
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
    for (let i = 0; i < 34; i++) {
      this.tableData.push({
        id: i + 1,
        ...item,
        name: `${item.name}${i}`
      });
    }
  }

  handleView(scope: any = {}): void {
    window.open(scope.data[scope.item.key]);
  }

  handleEdit(type: string, data: any = {}) {
  }

  handleShowCheckbox(val: any) {
    if (val) {
      this.columns = [
        {
          showCheckbox: true
        },
        ...columns
      ];
    } else {
      this.columns = [...columns];
    }
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

  pageSizeChange(event: any): void {
    this.table.init();
  }
  pageIndexChange(event: any): void {
    this.table.init();
  }
}

```
