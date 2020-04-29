import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.less']
})
export class ScrollListComponent implements OnInit {
  list: any = [];

  apiMarkdown = require('raw-loader!./docs/api.md').default;

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md').default },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md').default }
  ];

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
