import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.less']
})
export class ScrollListComponent implements OnInit {
  list: any = [];

  apiMarkdown = require('raw-loader!./docs/api.md');

  constructor() {}

  ngOnInit() {
    this.createData();
  }

  createData() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        title: `标题 ${i}`,
        desc: '描述'
      });
    }
  }
}
