import { Component, OnInit, ViewChild } from '@angular/core';
import { columns, item } from '../columns';

@Component({
  selector: 'app-table-drop',
  templateUrl: './table-drop.component.html'
})
export class TableDropComponent implements OnInit {
  @ViewChild('table') table: any;

  columns = [
    {
      title: '禁用拖拽',
      key: 'disabled',
      format: ({ disabled }) => {
        return disabled ? '是' : '否';
      }
    },
    ...columns
  ];
  tableData: any[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 34; i++) {
      this.tableData.push({
        id: i + 1,
        ...item,
        name: `${item.name}${i}`,
        disabled: i > 4
      });
    }
  }

  /**
   * 拖拽监听
   * @param event 事件
   */
  handleDraggChange(event): void {
    console.log(event);
  }
}
