import { Component, OnInit, ViewChild } from '@angular/core';
import { columns, item } from '../columns';

@Component({
  selector: 'app-table-drop',
  templateUrl: './table-drop.component.html'
})
export class TableDropComponent implements OnInit {
  @ViewChild('table') table: any;

  columns = columns;
  tableData: any[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 34; i++) {
      this.tableData.push({
        id: i + 1,
        ...item,
        name: `刘备${i + 1}`,
        draggable: i < 5
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
