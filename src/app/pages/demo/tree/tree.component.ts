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
    this.nodes = this.filterNodes(this.treeList);
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
    // if (event.eventName === 'search' && event.nodes.length > 0) {
    //   event.nodes.forEach(node => {
    //     if (!node.isExpanded) {
    //       node.clearChildren();
    //     }
    //   });
    // }
  }

  /**
   * 展开子节点
   * @param event 展开事件
   */
  handleExpandChange(event: any): void {
    console.log(event);
    // if (event.eventName === 'expand') {
    //   const node = event.node;
    //   if (node && node.getChildren().length === 0 && node.isExpanded) {
    //     this.removeNode(node);
    //     this.loadNode(node).then(data => {
    //       node.addChildren(data);
    //       node.setExpanded(true);
    //     });
    //   }
    // }
  }

  /**
   * 移除同级节点的子节点
   * @param node 节点
   */
  removeNode(node: any) {
    let clearNodes = [];
    if (node.parentNode) {
      clearNodes = node.parentNode.children;
    } else {
      clearNodes = node.treeService.rootNodes;
    }
    clearNodes.forEach(item => {
      item.clearChildren();
      item.setExpanded(false);
    });
  }

  /**
   * 加载子节点
   * @param node 节点
   */
  loadNode(node: any) {
    this.getNodeById(this.treeList, node.key);
    const childNode = this.childNodes;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(childNode);
      }, 300);
    });
  }

  /**
   * 根据id查找tree 中指定的子节点数据
   * @param arr 数组
   * @param id id
   */
  getNodeById(arr: any, id: any) {
    arr.forEach(item => {
      if (item.id === id) {
        if (!item.isLeaf) {
          this.childNodes = item.children.map(v => {
            return { title: v.name, key: v.id, level: v.level, isLeaf: v.isLeaf };
          });
        } else {
          this.childNodes = [];
        }
      } else {
        if (item.children && item.children.length > 0) {
          this.getNodeById(item.children, id);
        }
      }
    });
  }
}
