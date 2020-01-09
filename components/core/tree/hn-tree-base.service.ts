/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { HnTreeNode } from './hn-tree-base-node';
import { isCheckDisabled, isInArray } from './hn-tree-base-util';
import { HnFormatEmitEvent } from './hn-tree-base.definitions';

export function isNotNil<T>(value: T): value is NonNullable<T> {
  return typeof value !== 'undefined' && value !== null;
}

@Injectable()
export class HnTreeBaseService implements OnDestroy {
  DRAG_SIDE_RANGE = 0.25;
  DRAG_MIN_GAP = 2;

  isCheckStrictly = false;
  isMultiple = false;
  selectedNode: HnTreeNode;
  rootNodes: HnTreeNode[] = [];
  selectedNodeList: HnTreeNode[] = [];
  expandedNodeList: HnTreeNode[] = [];
  checkedNodeList: HnTreeNode[] = [];
  halfCheckedNodeList: HnTreeNode[] = [];
  matchedNodeList: HnTreeNode[] = [];
  triggerEventChange$ = new Subject<HnFormatEmitEvent>();

  /**
   * trigger event
   */
  eventTriggerChanged(): Observable<HnFormatEmitEvent> {
    return this.triggerEventChange$.asObservable();
  }

  /**
   * reset tree nodes will clear default node list
   */
  initTree(nzNodes: HnTreeNode[]): void {
    this.rootNodes = nzNodes;
    this.expandedNodeList = [];
    this.selectedNodeList = [];
    this.halfCheckedNodeList = [];
    this.checkedNodeList = [];
    this.matchedNodeList = [];
    // refresh node checked state
    setTimeout(() => {
      this.refreshCheckState(this.isCheckStrictly);
    });
  }

  getSelectedNode(): HnTreeNode | null {
    return this.selectedNode;
  }

  /**
   * get some list
   */
  getSelectedNodeList(): HnTreeNode[] {
    return this.conductNodeState('select');
  }

  /**
   * return checked nodes
   */
  getCheckedNodeList(): HnTreeNode[] {
    return this.conductNodeState('check');
  }

  getHalfCheckedNodeList(): HnTreeNode[] {
    return this.conductNodeState('halfCheck');
  }

  /**
   * return expanded nodes
   */
  getExpandedNodeList(): HnTreeNode[] {
    return this.conductNodeState('expand');
  }

  /**
   * return search matched nodes
   */
  getMatchedNodeList(): HnTreeNode[] {
    return this.conductNodeState('match');
  }

  // tslint:disable-next-line:no-any
  isArrayOfNzTreeNode(value: any[]): boolean {
    return value.every(item => item instanceof HnTreeNode);
  }

  /**
   * reset selectedNodeList
   */
  calcSelectedKeys(selectedKeys: string[], nzNodes: HnTreeNode[], isMulti: boolean = false): void {
    const calc = (nodes: HnTreeNode[]): boolean => {
      return nodes.every(node => {
        if (isInArray(node.key, selectedKeys)) {
          node.isSelected = true;
          if (!isMulti) {
            // if not support multi select
            return false;
          }
        } else {
          node.isSelected = false;
        }
        if (node.children.length > 0) {
          // Recursion
          return calc(node.children);
        }
        return true;
      });
    };
    calc(nzNodes);
  }

  /**
   * reset expandedNodeList
   */
  calcExpandedKeys(expandedKeys: string[], nzNodes: HnTreeNode[]): void {
    this.expandedNodeList = [];
    const calc = (nodes: HnTreeNode[]) => {
      nodes.forEach(node => {
        node.isExpanded = isInArray(node.key, expandedKeys);
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(nzNodes);
  }

  /**
   * reset checkedNodeList
   */
  calcCheckedKeys(checkedKeys: string[], nzNodes: HnTreeNode[], isCheckStrictly: boolean = false): void {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    const calc = (nodes: HnTreeNode[]) => {
      nodes.forEach(node => {
        if (isInArray(node.key, checkedKeys)) {
          node.isChecked = true;
          node.isHalfChecked = false;
        } else {
          node.isChecked = false;
          node.isHalfChecked = false;
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(nzNodes);
    // controlled state
    this.refreshCheckState(isCheckStrictly);
  }

  /**
   * set drag node
   */
  setSelectedNode(node: HnTreeNode): void {
    this.selectedNode = node;
  }

  /**
   * set node selected status
   */
  setNodeActive(node: HnTreeNode): void {
    if (!this.isMultiple && node.isSelected) {
      this.selectedNodeList.forEach(n => {
        if (node.key !== n.key) {
          // reset other nodes
          n.isSelected = false;
        }
      });
      // single mode: remove pre node
      this.selectedNodeList = [];
    }
    this.setSelectedNodeList(node, this.isMultiple);
  }

  /**
   * add or remove node to selectedNodeList
   */
  setSelectedNodeList(node: HnTreeNode, isMultiple: boolean = false): void {
    const index = this.selectedNodeList.findIndex(n => node.key === n.key);
    if (isMultiple) {
      if (node.isSelected && index === -1) {
        this.selectedNodeList.push(node);
      }
    } else {
      if (node.isSelected && index === -1) {
        this.selectedNodeList = [node];
      }
    }
    if (!node.isSelected) {
      this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
    }
  }

  /**
   * merge checked nodes
   */
  setHalfCheckedNodeList(node: HnTreeNode): void {
    const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
    if (node.isHalfChecked && index === -1) {
      this.halfCheckedNodeList.push(node);
    } else if (!node.isHalfChecked && index > -1) {
      this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
    }
  }

  setCheckedNodeList(node: HnTreeNode): void {
    const index = this.checkedNodeList.findIndex(n => node.key === n.key);
    if (node.isChecked && index === -1) {
      this.checkedNodeList.push(node);
    } else if (!node.isChecked && index > -1) {
      this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
    }
  }

  /**
   * conduct checked/selected/expanded keys
   */
  conductNodeState(type: string = 'check'): HnTreeNode[] {
    let resultNodesList: HnTreeNode[] = [];
    switch (type) {
      case 'select':
        resultNodesList = this.selectedNodeList;
        break;
      case 'expand':
        resultNodesList = this.expandedNodeList;
        break;
      case 'match':
        resultNodesList = this.matchedNodeList;
        break;
      case 'check':
        resultNodesList = this.checkedNodeList;
        const isIgnore = (node: HnTreeNode): boolean => {
          const parentNode = node.getParentNode();
          if (parentNode) {
            if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
              return true;
            } else {
              return isIgnore(parentNode);
            }
          }
          return false;
        };
        // merge checked
        if (!this.isCheckStrictly) {
          resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
        }
        break;
      case 'halfCheck':
        if (!this.isCheckStrictly) {
          resultNodesList = this.halfCheckedNodeList;
        }
        break;
    }
    return resultNodesList;
  }

  /**
   * set expanded nodes
   */
  setExpandedNodeList(node: HnTreeNode): void {
    if (node.isLeaf) {
      return;
    }
    const index = this.expandedNodeList.findIndex(n => node.key === n.key);
    if (node.isExpanded && index === -1) {
      this.expandedNodeList.push(node);
    } else if (!node.isExpanded && index > -1) {
      this.expandedNodeList = this.expandedNodeList.filter(n => node.key !== n.key);
    }
  }

  /**
   * check state
   * @param isCheckStrictly
   */
  refreshCheckState(isCheckStrictly: boolean = false): void {
    if (isCheckStrictly) {
      return;
    }
    this.checkedNodeList.forEach(node => {
      this.conduct(node);
    });
  }

  // reset other node checked state based current node
  conduct(node: HnTreeNode): void {
    const isChecked = node.isChecked;
    if (node) {
      this.conductUp(node);
      this.conductDown(node, isChecked);
    }
  }

  /**
   * 1、children half checked
   * 2、children all checked, parent checked
   * 3、no children checked
   */
  conductUp(node: HnTreeNode): void {
    const parentNode = node.getParentNode();
    if (parentNode) {
      if (!isCheckDisabled(parentNode)) {
        if (parentNode.children.every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
          parentNode.isChecked = true;
          parentNode.isHalfChecked = false;
        } else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = true;
        } else {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = false;
        }
      }
      this.setCheckedNodeList(parentNode);
      this.setHalfCheckedNodeList(parentNode);
      this.conductUp(parentNode);
    }
  }

  /**
   * reset child check state
   */
  conductDown(node: HnTreeNode, value: boolean): void {
    if (!isCheckDisabled(node)) {
      node.isChecked = value;
      node.isHalfChecked = false;
      this.setCheckedNodeList(node);
      this.setHalfCheckedNodeList(node);
      node.children.forEach(n => {
        this.conductDown(n, value);
      });
    }
  }

  /**
   * search value & expand node
   * should add expandlist
   */
  searchExpand(value: string): void {
    this.matchedNodeList = [];
    const expandedKeys: string[] = [];
    if (!isNotNil(value)) {
      return;
    }
    // to reset expandedNodeList
    const expandParent = (n: HnTreeNode) => {
      // expand parent node
      const parentNode = n.getParentNode();
      if (parentNode) {
        expandedKeys.push(parentNode.key);
        expandParent(parentNode);
      }
    };
    const searchChild = (n: HnTreeNode) => {
      if (value && n.title.includes(value)) {
        // match the node
        n.isMatched = true;
        this.matchedNodeList.push(n);
        // expand parentNode
        // expandParent(n);
      } else {
        n.isMatched = false;
      }
      n.canHide = !n.isMatched;
      n.children.forEach(child => {
        searchChild(child);
      });
      // 修复点击搜索搜索项消失的bug start
      if (n.canHide && n.children.length > 0) {
        let allHidden = true;
        allHidden = !n.children.some(child => {
          return child.isMatched;
        });
        n.canHide = allHidden === true;
      }
      // 修复点击搜索搜索项消失的bug end
    };
    this.rootNodes.forEach(child => {
      searchChild(child);
    });
    // 默认展开搜索第一项，解决大批量数据匹配渲染问题
    if (this.matchedNodeList.length > 0) {
      expandParent(this.matchedNodeList[0]);
    }
    // expand matched keys
    this.calcExpandedKeys(expandedKeys, this.rootNodes);
  }

  /**
   * flush after delete node
   */
  afterRemove(nodes: HnTreeNode[]): void {
    // to reset selectedNodeList & expandedNodeList
    const loopNode = (node: HnTreeNode) => {
      // remove selected node
      this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
      // remove expanded node
      this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
      // remove checked node
      this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
      if (node.children) {
        node.children.forEach(child => {
          loopNode(child);
        });
      }
    };
    nodes.forEach(n => {
      loopNode(n);
    });
    this.refreshCheckState(this.isCheckStrictly);
  }

  /**
   * drag event
   */
  refreshDragNode(node: HnTreeNode): void {
    if (node.children.length === 0) {
      // until root
      this.conductUp(node);
    } else {
      node.children.forEach(child => {
        this.refreshDragNode(child);
      });
    }
  }

  // reset node level
  resetNodeLevel(node: HnTreeNode): void {
    const parentNode = node.getParentNode();
    if (parentNode) {
      node.level = parentNode.level + 1;
    } else {
      node.level = 0;
    }
    for (const child of node.children) {
      this.resetNodeLevel(child);
    }
  }

  calcDropPosition(event: DragEvent): number {
    const { clientY } = event;
    // to fix firefox undefined
    const { top, bottom, height } = event.srcElement
      ? (event.srcElement as Element).getBoundingClientRect()
      : (event.target as Element).getBoundingClientRect();
    const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);

    if (clientY <= top + des) {
      return -1;
    } else if (clientY >= bottom - des) {
      return 1;
    }

    return 0;
  }

  /**
   * drop
   * 0: inner -1: pre 1: next
   */
  dropAndApply(targetNode: HnTreeNode, dragPos: number = -1): void {
    if (!targetNode || dragPos > 1) {
      return;
    }
    const treeService = targetNode.treeService;
    const targetParent = targetNode.getParentNode();
    const isSelectedRootNode = this.selectedNode.getParentNode();
    // remove the dragNode
    if (isSelectedRootNode) {
      isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
    } else {
      this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
    }
    switch (dragPos) {
      case 0:
        targetNode.addChildren([this.selectedNode]);
        this.resetNodeLevel(targetNode);
        break;
      case -1:
      case 1:
        const tIndex = dragPos === 1 ? 1 : 0;
        if (targetParent) {
          targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
          const parentNode = this.selectedNode.getParentNode();
          if (parentNode) {
            this.resetNodeLevel(parentNode);
          }
        } else {
          const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
          // Insert root node.
          this.rootNodes.splice(targetIndex, 0, this.selectedNode);
          this.rootNodes[targetIndex].parentNode = null;
          this.rootNodes[targetIndex].level = 0;
        }
        break;
    }
    // flush all nodes
    this.rootNodes.forEach(child => {
      if (!child.treeService) {
        child.service = treeService;
      }
      this.refreshDragNode(child);
    });
  }

  /**
   * emit Structure
   * eventName
   * node
   * event: MouseEvent / DragEvent
   * dragNode
   */
  formatEvent(eventName: string, node: HnTreeNode | null, event: MouseEvent | DragEvent | null): HnFormatEmitEvent {
    const emitStructure: HnFormatEmitEvent = {
      eventName: eventName,
      node: node,
      event: event
    };
    switch (eventName) {
      case 'dragstart':
      case 'dragenter':
      case 'dragover':
      case 'dragleave':
      case 'drop':
      case 'dragend':
        Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
        break;
      case 'click':
      case 'dblclick':
        Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
        Object.assign(emitStructure, { nodes: this.selectedNodeList });
        Object.assign(emitStructure, { keys: this.selectedNodeList.map(n => n.key) });
        break;
      case 'check':
        const checkedNodeList = this.getCheckedNodeList();

        Object.assign(emitStructure, { checkedKeys: checkedNodeList });
        Object.assign(emitStructure, { nodes: checkedNodeList });
        Object.assign(emitStructure, { keys: checkedNodeList.map(n => n.key) });
        break;
      case 'search':
        Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
        Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
        Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(n => n.key) });
        break;
      case 'expand':
        Object.assign(emitStructure, { nodes: this.expandedNodeList });
        Object.assign(emitStructure, { keys: this.expandedNodeList.map(n => n.key) });
        break;
    }
    return emitStructure;
  }

  ngOnDestroy(): void {
    this.triggerEventChange$.complete();
  }
}
