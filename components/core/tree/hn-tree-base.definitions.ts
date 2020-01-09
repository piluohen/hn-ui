/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { HnTreeNode } from './hn-tree-base-node';

export interface HnFormatEmitEvent {
  eventName: string;
  node?: HnTreeNode | null;
  event?: MouseEvent | DragEvent | null;
  dragNode?: HnTreeNode;
  selectedKeys?: HnTreeNode[];
  checkedKeys?: HnTreeNode[];
  matchedKeys?: HnTreeNode[];
  nodes?: HnTreeNode[];
  keys?: string[];
}

export interface HnFormatBeforeDropEvent {
  dragNode: HnTreeNode;
  node: HnTreeNode;
  pos: number;
}

export interface HnTreeNodeBaseComponent {
  setClassMap(): void;
  markForCheck(): void;
}
