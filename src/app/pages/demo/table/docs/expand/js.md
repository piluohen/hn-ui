```JS
import { Component, OnInit, ViewChild } from '@angular/core';
import { columns, item } from '../columns';

@Component({
  selector: 'app-table-expand',
  templateUrl: './table-expand.component.html'
})
export class TableExpandComponent implements OnInit {
  @ViewChild('table') table: any;

  draggable = false;

  columns: any[] = [
    {
      showExpand: true,
      expandChange: (event: any, value: any) => {
      }
    },
    {
      showCheckbox: true,
      left: '60px'
    },
    ...columns
  ];

  childColumns: any[] = [
    { title: '名称', key: 'name' },
    { title: '性别', key: 'gender' },
    { title: '年龄', key: 'age' }
  ];

  tableData: any[] = [];
  constructor() {}

  ngOnInit() {
    const names = ['关羽', '张飞', '诸葛亮', '赵云'];
    for (let i = 0; i < 34; i++) {
      this.tableData.push({
        id: i + 1,
        ...item,
        name: `${item.name}${i}`,
        expand: false,
        children: Array.from({ length: 4 }).map((v, index) => {
          return {
            ...item,
            name: `${names[index]}${i}`
          };
        })
      });
    }
  }

  /**
   * 选中操作
   * @param event 选中项
   */
  handleCheckChange(event: any): void {
  }

  /**
   * 拖拽监听
   * @param event 事件
   */
  handleDraggChange(event): void {
  }
}

```
