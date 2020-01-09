import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {
  searchValue: any = '';

  // 全部tree数据
  treeList: any[] = require('./tree.json').data.list;

  // 节点数据
  nodes: any[] = [];

  // 当前活动子节点数据
  childNodes: any[] = [];

  searchNum: 0;

  constructor() {}

  ngOnInit() {
    this.nodes = this.treeList;
  }

  /**
   * 处理nodes
   * @param list 数组
   */
  filterNodes(list: any = []) {
    // 初始化赋值level 1层的数据给tree渲染
    // return list.map(item => {
    //   return { title: item.name, key: item.id, level: item.level, isLeaf: item.isLeaf };
    // });
    return list.map(item => {
      if (item.children) {
        item.children = this.filterNodes(item.children);
      } else {
        item.children = null;
      }
      return { title: item.name, key: item.id, level: item.level, isLeaf: item.isLeaf, children: item.children };
    });
  }

  /**
   * 节点点击事件
   */
  handleClick(event: any): void {}

  handleSearchValue(event: any) {
    console.log(event);
    this.searchNum = event.matchedKeys.length;
  }

  /**
   * 展开子节点
   * @param event 展开事件
   */
  handleExpandChange(event: any): void {
    console.log(event);
  }
}
