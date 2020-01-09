import { HnTreeNode } from './hn-tree-base-node';
import { HnTreeBaseService } from './hn-tree-base.service';

export class HnTreeBase {
  constructor(public nzTreeService: HnTreeBaseService) {}

  /**
   * Coerces a value({@link any[]}) to a TreeNodes({@link HnTreeNode[]})
   */
  coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value: any[]
  ): HnTreeNode[] {
    let nodes: HnTreeNode[] = [];
    if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
      // has not been new HnTreeNode
      nodes = value.map(item => new HnTreeNode(item, null, this.nzTreeService));
    } else {
      nodes = value.map((item: HnTreeNode) => {
        item.service = this.nzTreeService;
        return item;
      });
    }
    return nodes;
  }

  /**
   * Get all nodes({@link HnTreeNode})
   */
  getTreeNodes(): HnTreeNode[] {
    return this.nzTreeService.rootNodes;
  }

  /**
   * Get {@link HnTreeNode} with key
   */
  getTreeNodeByKey(key: string): HnTreeNode | null {
    // flat tree nodes
    const nodes: HnTreeNode[] = [];
    const getNode = (node: HnTreeNode): void => {
      nodes.push(node);
      node.getChildren().forEach(n => {
        getNode(n);
      });
    };
    this.getTreeNodes().forEach(n => {
      getNode(n);
    });
    return nodes.find(n => n.key === key) || null;
  }

  /**
   * Get checked nodes(merged)
   */
  getCheckedNodeList(): HnTreeNode[] {
    return this.nzTreeService.getCheckedNodeList();
  }

  /**
   * Get selected nodes
   */
  getSelectedNodeList(): HnTreeNode[] {
    return this.nzTreeService.getSelectedNodeList();
  }

  /**
   * Get half checked nodes
   */
  getHalfCheckedNodeList(): HnTreeNode[] {
    return this.nzTreeService.getHalfCheckedNodeList();
  }

  /**
   * Get expanded nodes
   */
  getExpandedNodeList(): HnTreeNode[] {
    return this.nzTreeService.getExpandedNodeList();
  }

  /**
   * Get matched nodes(if nzSearchValue is not null)
   */
  getMatchedNodeList(): HnTreeNode[] {
    return this.nzTreeService.getMatchedNodeList();
  }
}
