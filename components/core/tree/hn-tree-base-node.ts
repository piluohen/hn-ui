
import { HnTreeNodeBaseComponent } from './hn-tree-base.definitions';
import { HnTreeBaseService } from './hn-tree-base.service';

export interface HnTreeNodeOptions {
  title: string;
  key: string;
  icon?: string;
  isLeaf?: boolean;
  checked?: boolean;
  selected?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  expanded?: boolean;
  children?: HnTreeNodeOptions[];

  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export class HnTreeNode {
  private _title: string;
  key: string;
  level = 0;
  origin: HnTreeNodeOptions;
  // Parent Node
  parentNode: HnTreeNode | null;
  private _icon: string;
  private _children: HnTreeNode[];
  private _isLeaf: boolean;
  private _isChecked: boolean;
  /**
   * @deprecated Maybe removed in next major version, use isChecked instead
   */
  private _isAllChecked: boolean;
  private _isSelectable: boolean;
  private _isDisabled: boolean;
  private _isDisableCheckbox: boolean;
  private _isExpanded: boolean;
  private _isHalfChecked: boolean;
  private _isSelected: boolean;
  private _isLoading: boolean;
  canHide: boolean;
  isMatched: boolean;

  service: HnTreeBaseService | null;
  component: HnTreeNodeBaseComponent;

  get treeService(): HnTreeBaseService | null {
    return this.service || (this.parentNode && this.parentNode.treeService);
  }

  constructor(
    option: HnTreeNodeOptions | HnTreeNode,
    parent: HnTreeNode | null = null,
    service: HnTreeBaseService | null = null
  ) {
    if (option instanceof HnTreeNode) {
      return option;
    }
    this.service = service || null;
    this.origin = option;
    this.key = option.key;
    this.parentNode = parent;
    this._title = option.title || '---';
    this._icon = option.icon || '';
    this._isLeaf = option.isLeaf || false;
    this._children = [];
    // option params
    this._isChecked = option.checked || false;
    this._isSelectable = option.disabled || option.selectable !== false;
    this._isDisabled = option.disabled || false;
    this._isDisableCheckbox = option.disableCheckbox || false;
    this._isExpanded = option.isLeaf ? false : option.expanded || false;
    this._isHalfChecked = false;
    this._isSelected = (!option.disabled && option.selected) || false;
    this._isLoading = false;
    this.isMatched = false;

    /**
     * parent's checked status will affect children while initializing
     */
    if (parent) {
      this.level = parent.level + 1;
    } else {
      this.level = 0;
    }
    if (typeof option.children !== 'undefined' && option.children !== null) {
      option.children.forEach(nodeOptions => {
        const s = this.treeService;
        if (
          s &&
          !s.isCheckStrictly &&
          option.checked &&
          !option.disabled &&
          !nodeOptions.disabled &&
          !nodeOptions.disableCheckbox
        ) {
          nodeOptions.checked = option.checked;
        }
        this._children.push(new HnTreeNode(nodeOptions, this));
      });
    }
  }

  /**
   * auto generate
   * get
   * set
   */
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
    this.update();
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
    this.update();
  }

  get children(): HnTreeNode[] {
    return this._children;
  }

  set children(value: HnTreeNode[]) {
    this._children = value;
    this.update();
  }

  get isLeaf(): boolean {
    return this._isLeaf;
  }

  set isLeaf(value: boolean) {
    this._isLeaf = value;
    this.update();
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
    this._isAllChecked = value;
    this.origin.checked = value;
    this.afterValueChange('isChecked');
  }

  get isAllChecked(): boolean {
    return this._isAllChecked;
  }

  /**
   * @deprecated Maybe removed in next major version, use `isChecked` instead.
   */
  set isAllChecked(value: boolean) {
    this._isAllChecked = value;
  }

  get isHalfChecked(): boolean {
    return this._isHalfChecked;
  }

  set isHalfChecked(value: boolean) {
    this._isHalfChecked = value;
    this.afterValueChange('isHalfChecked');
  }

  get isSelectable(): boolean {
    return this._isSelectable;
  }

  set isSelectable(value: boolean) {
    this._isSelectable = value;
    this.update();
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  set isDisabled(value: boolean) {
    this._isDisabled = value;
    this.update();
  }

  get isDisableCheckbox(): boolean {
    return this._isDisableCheckbox;
  }

  set isDisableCheckbox(value: boolean) {
    this._isDisableCheckbox = value;
    this.update();
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  set isExpanded(value: boolean) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange('isExpanded');
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
    this.origin.selected = value;
    this.afterValueChange('isSelected');
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
    this.update();
  }

  public setSyncChecked(checked: boolean = false, halfChecked: boolean = false): void {
    this.setChecked(checked, halfChecked);
    if (this.treeService && !this.treeService.isCheckStrictly) {
      this.treeService.conduct(this);
    }
  }

  /**
   * @deprecated Maybe removed in next major version, use `isChecked` instead.
   */
  public setChecked(checked: boolean = false, halfChecked: boolean = false): void {
    this.origin.checked = checked;
    this.isChecked = checked;
    this.isAllChecked = checked;
    this.isHalfChecked = halfChecked;
  }

  /**
   * @deprecated Maybe removed in next major version, use `isExpanded` instead.
   */
  public setExpanded(value: boolean): void {
    this.isExpanded = value;
  }

  /**
   * @deprecated Maybe removed in next major version, use `isSelected` instead.
   */
  public setSelected(value: boolean): void {
    if (this.isDisabled) {
      return;
    }
    this.isSelected = value;
  }

  public getParentNode(): HnTreeNode | null {
    return this.parentNode;
  }

  public getChildren(): HnTreeNode[] {
    return this.children;
  }

  /**
   * Support appending child nodes by position. Leaf node cannot be appended.
   */
  // tslint:disable-next-line:no-any
  public addChildren(children: any[], childPos: number = -1): void {
    if (!this.isLeaf) {
      children.forEach(node => {
        const refreshLevel = (n: HnTreeNode) => {
          n.getChildren().forEach(c => {
            c.level = c.getParentNode()!.level + 1;
            // flush origin
            c.origin.level = c.level;
            refreshLevel(c);
          });
        };
        let child = node;
        if (child instanceof HnTreeNode) {
          child.parentNode = this;
        } else {
          child = new HnTreeNode(node, this);
        }
        child.level = this.level + 1;
        child.origin.level = child.level;
        refreshLevel(child);
        try {
          childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
          // flush origin
        } catch (e) {}
      });
      this.origin.children = this.getChildren().map(v => v.origin);
      // remove loading state
      this.isLoading = false;
    }
  }

  public clearChildren(): void {
    // refresh checked state
    this.afterValueChange('clearChildren');
    this.children = [];
    this.origin.children = [];
  }

  public remove(): void {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
      parentNode.origin.children = parentNode.origin.children!.filter(v => v.key !== this.key);
      this.afterValueChange('remove');
    }
  }

  public afterValueChange(key: string): void {
    if (this.treeService) {
      switch (key) {
        case 'isChecked':
          this.treeService.setCheckedNodeList(this);
          break;
        case 'isHalfChecked':
          this.treeService.setHalfCheckedNodeList(this);
          break;
        case 'isExpanded':
          this.treeService.setExpandedNodeList(this);
          break;
        case 'isSelected':
          this.treeService.setNodeActive(this);
          break;
        case 'clearChildren':
          this.treeService.afterRemove(this.getChildren());
          break;
        case 'remove':
          this.treeService.afterRemove([this]);
          break;
      }
    }
    this.update();
  }

  public update(): void {
    if (this.component) {
      this.component.setClassMap();
      this.component.markForCheck();
    }
  }
}
