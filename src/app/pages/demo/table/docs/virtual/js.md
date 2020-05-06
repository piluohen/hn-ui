```JS
import { Component, OnInit, ViewChild } from '@angular/core';
import { columns, item } from '../columns';

@Component({
  selector: 'app-table-virtual',
  templateUrl: './table-virtual.component.html'
})
export class TableVirtualComponent implements OnInit {
  @ViewChild('table') table: any;

  columns = columns;
  tableData: any[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 2000; i++) {
      this.tableData.push({
        id: i + 1,
        ...item
      });
    }
  }

  /**
   * 虚拟滚动监听
   * @param index 索引
   */
  handleVirtualChange(index: any): void {
  }
}

```
