import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';

import { HnTreeBaseService, HnTreeNode, treeCollapseMotion, HnFormatBeforeDropEvent } from 'hn-ui/core';

@Component({
  selector: 'hn-tree-node',
  exportAs: 'hnTreeNode',
  templateUrl: './hn-tree-node.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  animations: [treeCollapseMotion]
})
export class HnTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('dragElement') dragElement: ElementRef;

  /**
   * for global property
   */
  @Input() hnTreeNode: HnTreeNode;
  @Input() @InputBoolean() hnShowLine: boolean;
  @Input() @InputBoolean() hnShowExpand: boolean;
  @Input() @InputBoolean() hnCheckable: boolean;
  @Input() @InputBoolean() hnAsyncData: boolean;
  @Input() @InputBoolean() hnHideUnMatched = false;
  @Input() @InputBoolean() hnNoAnimation = false;
  @Input() @InputBoolean() hnSelectMode = false;
  @Input() @InputBoolean() hnShowIcon = false;
  @Input() hnExpandedIcon: TemplateRef<{ $implicit: HnTreeNode }>;
  @Input() hnTreeTemplate: TemplateRef<{ $implicit: HnTreeNode }>;
  @Input() hnBeforeDrop: (confirm: HnFormatBeforeDropEvent) => Observable<boolean>;
  @Input() hnSearchValue = '';
  @Input() @InputBoolean() hnAccordion = false;

  @Input()
  set hnDraggable(value: boolean) {
    this._nzDraggable = value;
    this.handDragEvent();
  }

  get hnDraggable(): boolean {
    return this._nzDraggable;
  }

  /**
   * @deprecated use `hnExpandAll` instead.
   */
  @Input()
  set hnDefaultExpandAll(value: boolean) {
    this._nzExpandAll = value;
    if (value && this.hnTreeNode && !this.hnTreeNode.isLeaf) {
      this.hnTreeNode.isExpanded = true;
    }
  }

  get hnDefaultExpandAll(): boolean {
    return this._nzExpandAll;
  }

  // default set
  @Input()
  set hnExpandAll(value: boolean) {
    this._nzExpandAll = value;
    if (value && this.hnTreeNode && !this.hnTreeNode.isLeaf) {
      this.hnTreeNode.isExpanded = true;
    }
  }

  get hnExpandAll(): boolean {
    return this._nzExpandAll;
  }

  // default var
  prefixCls = 'ant-tree';
  nzNodeClass = {};
  nzNodeSwitcherClass = {};
  nzNodeContentClass = {};
  nzNodeCheckboxClass = {};
  nzNodeContentIconClass = {};
  nzNodeContentLoadingClass = {};

  /**
   * drag var
   */
  destroy$ = new Subject();
  dragPos = 2;
  dragPosClass: { [key: string]: string } = {
    '0': 'drag-over',
    '1': 'drag-over-gap-bottom',
    '-1': 'drag-over-gap-top'
  };

  /**
   * default set
   */
  _nzDraggable = false;
  _nzExpandAll = false;

  get nzIcon(): string {
    return this.hnTreeNode.icon;
  }

  get canDraggable(): boolean | null {
    return this.hnDraggable && !this.hnTreeNode.isDisabled ? true : null;
  }

  get isShowLineIcon(): boolean {
    return !this.hnTreeNode.isLeaf && this.hnShowLine;
  }

  get isShowSwitchIcon(): boolean {
    return !this.hnTreeNode.isLeaf && !this.hnShowLine;
  }

  get isSwitcherOpen(): boolean {
    return this.hnTreeNode.isExpanded && !this.hnTreeNode.isLeaf;
  }

  get isSwitcherClose(): boolean {
    return !this.hnTreeNode.isExpanded && !this.hnTreeNode.isLeaf;
  }

  get displayStyle(): string {
    // to hide unmatched nodes
    return this.hnSearchValue &&
      this.hnHideUnMatched &&
      !this.hnTreeNode.isMatched &&
      !this.hnTreeNode.isExpanded &&
      this.hnTreeNode.canHide
      ? 'none'
      : '';
  }

  /**
   * reset node class
   */
  setClassMap(): void {
    this.prefixCls = this.hnSelectMode ? 'ant-select-tree' : 'ant-tree';
    this.nzNodeClass = {
      [`${this.prefixCls}-treenode-disabled`]: this.hnTreeNode.isDisabled,
      [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
      [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
      [`${this.prefixCls}-treenode-checkbox-checked`]: this.hnTreeNode.isChecked,
      [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.hnTreeNode.isHalfChecked,
      [`${this.prefixCls}-treenode-selected`]: this.hnTreeNode.isSelected,
      [`${this.prefixCls}-treenode-loading`]: this.hnTreeNode.isLoading
    };
    this.nzNodeSwitcherClass = {
      [`${this.prefixCls}-switcher`]: true,
      [`${this.prefixCls}-switcher-noop`]: this.hnTreeNode.isLeaf,
      [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
      [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
    };

    this.nzNodeCheckboxClass = {
      [`${this.prefixCls}-checkbox`]: true,
      [`${this.prefixCls}-checkbox-checked`]: this.hnTreeNode.isChecked,
      [`${this.prefixCls}-checkbox-indeterminate`]: this.hnTreeNode.isHalfChecked,
      [`${this.prefixCls}-checkbox-disabled`]: this.hnTreeNode.isDisabled || this.hnTreeNode.isDisableCheckbox
    };

    this.nzNodeContentClass = {
      [`${this.prefixCls}-node-content-wrapper`]: true,
      [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
      [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
      [`${this.prefixCls}-node-selected`]: this.hnTreeNode.isSelected
    };
    this.nzNodeContentIconClass = {
      [`${this.prefixCls}-iconEle`]: true,
      [`${this.prefixCls}-icon__customize`]: true
    };
    this.nzNodeContentLoadingClass = {
      [`${this.prefixCls}-iconEle`]: true
    };
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent): void {
    if (this.hnSelectMode) {
      event.preventDefault();
    }
  }

  /**
   * click node to select, 200ms to dbl click
   */
  @HostListener('click', ['$event'])
  nzClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.hnTreeNode.isSelectable && !this.hnTreeNode.isDisabled) {
      this.hnTreeNode.isSelected = !this.hnTreeNode.isSelected;
    }
    const eventNext = this.nzTreeService.formatEvent('click', this.hnTreeNode, event);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  @HostListener('dblclick', ['$event'])
  nzDblClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const eventNext = this.nzTreeService.formatEvent('dblclick', this.hnTreeNode, event);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  /**
   * @param event
   */
  @HostListener('contextmenu', ['$event'])
  nzContextMenu(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const eventNext = this.nzTreeService.formatEvent('contextmenu', this.hnTreeNode, event);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  /**
   * collapse node
   * @param event
   */
  _clickExpand(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.hnTreeNode.isLoading && !this.hnTreeNode.isLeaf) {
      // set async state
      if (this.hnAsyncData && this.hnTreeNode.children.length === 0 && !this.hnTreeNode.isExpanded) {
        this.hnTreeNode.isLoading = true;
      }
      // 手风琴模式
      if (this.hnAccordion) {
        let clearNodes = [];
        if (this.hnTreeNode.parentNode) {
          clearNodes = this.hnTreeNode.parentNode.children;
        } else {
          clearNodes = this.hnTreeNode.treeService.rootNodes;
        }
        clearNodes.forEach(child => {
          if (child.key !== this.hnTreeNode.key && child.isExpanded === true) {
            child.setExpanded(false);
          }
        });
      }
      this.hnTreeNode.isExpanded = !this.hnTreeNode.isExpanded;
      if (this.hnTreeNode.isMatched) {
        this.setDisplayForParentNodes(this.hnTreeNode);
      }
      this.setDisplayForChildNodes(this.hnTreeNode);
      const eventNext = this.nzTreeService.formatEvent('expand', this.hnTreeNode, event);
      this.nzTreeService!.triggerEventChange$!.next(eventNext);
    }
  }

  private setDisplayForChildNodes(parentNode: HnTreeNode): void {
    const { children } = parentNode;
    if (children.length > 0) {
      // 修复点击搜索搜索项，子项消失的bug
      parentNode.canHide = false;

      children.map(node => {
        const canHide = !node.isMatched;
        node.canHide = canHide;
        this.setDisplayForChildNodes(node);
      });
    }
  }

  private setDisplayForParentNodes(targetNode: HnTreeNode): void {
    const parentNode = targetNode.getParentNode();
    if (parentNode) {
      parentNode.canHide = false;
      this.setDisplayForParentNodes(parentNode);
    }
  }

  /**
   * check node
   * @param event
   */
  _clickCheckBox(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // return if node is disabled
    if (this.hnTreeNode.isDisabled || this.hnTreeNode.isDisableCheckbox) {
      return;
    }
    this.hnTreeNode.isChecked = !this.hnTreeNode.isChecked;
    this.hnTreeNode.isHalfChecked = false;
    if (!this.nzTreeService.isCheckStrictly) {
      this.nzTreeService.conduct(this.hnTreeNode);
    }
    const eventNext = this.nzTreeService.formatEvent('check', this.hnTreeNode, event);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  /**
   * drag event
   * @param e
   */
  clearDragClass(): void {
    const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
    dragClass.forEach(e => {
      this.renderer.removeClass(this.dragElement.nativeElement, e);
    });
  }

  handleDragStart(e: DragEvent): void {
    e.stopPropagation();
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer!.setData('text/plain', this.hnTreeNode.key!);
    } catch (error) {
      // empty
    }
    this.nzTreeService.setSelectedNode(this.hnTreeNode);
    this.hnTreeNode.isExpanded = false;
    const eventNext = this.nzTreeService.formatEvent('dragstart', this.hnTreeNode, e);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  handleDragEnter(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    // reset position
    this.dragPos = 2;
    this.ngZone.run(() => {
      const node = this.nzTreeService.getSelectedNode();
      if (node && node.key !== this.hnTreeNode.key && !this.hnTreeNode.isExpanded && !this.hnTreeNode.isLeaf) {
        this.hnTreeNode.isExpanded = true;
      }
      const eventNext = this.nzTreeService.formatEvent('dragenter', this.hnTreeNode, e);
      this.nzTreeService!.triggerEventChange$!.next(eventNext);
    });
  }

  handleDragOver(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    const dropPosition = this.nzTreeService.calcDropPosition(e);
    if (this.dragPos !== dropPosition) {
      this.clearDragClass();
      this.dragPos = dropPosition;
      // leaf node will pass
      if (!(this.dragPos === 0 && this.hnTreeNode.isLeaf)) {
        this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
      }
    }
    const eventNext = this.nzTreeService.formatEvent('dragover', this.hnTreeNode, e);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  handleDragLeave(e: DragEvent): void {
    e.stopPropagation();
    this.ngZone.run(() => {
      this.clearDragClass();
    });
    const eventNext = this.nzTreeService.formatEvent('dragleave', this.hnTreeNode, e);
    this.nzTreeService!.triggerEventChange$!.next(eventNext);
  }

  handleDragDrop(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      this.clearDragClass();
      const node = this.nzTreeService.getSelectedNode();
      if (!node || (node && node.key === this.hnTreeNode.key) || (this.dragPos === 0 && this.hnTreeNode.isLeaf)) {
        return;
      }
      // pass if node is leafNo
      const dropEvent = this.nzTreeService.formatEvent('drop', this.hnTreeNode, e);
      const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.hnTreeNode, e);
      if (this.hnBeforeDrop) {
        this.hnBeforeDrop({
          dragNode: this.nzTreeService.getSelectedNode()! as any,
          node: this.hnTreeNode as any,
          pos: this.dragPos
        }).subscribe((canDrop: boolean) => {
          if (canDrop) {
            this.nzTreeService.dropAndApply(this.hnTreeNode, this.dragPos);
          }
          this.nzTreeService!.triggerEventChange$!.next(dropEvent);
          this.nzTreeService!.triggerEventChange$!.next(dragEndEvent);
        });
      } else if (this.hnTreeNode) {
        this.nzTreeService.dropAndApply(this.hnTreeNode, this.dragPos);
        this.nzTreeService!.triggerEventChange$!.next(dropEvent);
      }
    });
  }

  handleDragEnd(e: DragEvent): void {
    e.stopPropagation();
    this.ngZone.run(() => {
      // if user do not custom beforeDrop
      if (!this.hnBeforeDrop) {
        const eventNext = this.nzTreeService.formatEvent('dragend', this.hnTreeNode, e);
        this.nzTreeService!.triggerEventChange$!.next(eventNext);
      }
    });
  }

  /**
   * Listening to dragging events.
   */
  handDragEvent(): void {
    this.ngZone.runOutsideAngular(() => {
      if (this.hnDraggable) {
        this.destroy$ = new Subject();
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragstart')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragStart(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragenter')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragEnter(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragover')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragOver(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragleave')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragLeave(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'drop')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragDrop(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragend')
          .pipe(takeUntil(this.destroy$))
          .subscribe((e: DragEvent) => this.handleDragEnd(e));
      } else {
        this.destroy$.next();
        this.destroy$.complete();
      }
    });
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

  markForCheck(): void {
    this.cdr.markForCheck();
  }

  constructor(
    public nzTreeService: HnTreeBaseService,
    private ngZone: NgZone,
    private renderer: Renderer2,
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective
  ) {}

  ngOnInit(): void {
    // init expanded / selected / checked list
    if (this.hnTreeNode.isSelected) {
      this.nzTreeService.setNodeActive(this.hnTreeNode);
    }
    if (this.hnTreeNode.isExpanded) {
      this.nzTreeService.setExpandedNodeList(this.hnTreeNode);
    }
    if (this.hnTreeNode.isChecked) {
      this.nzTreeService.setCheckedNodeList(this.hnTreeNode);
    }
    // TODO
    this.hnTreeNode.component = this;
    this.nzTreeService
      .eventTriggerChanged()
      .pipe(
        filter(data => data.node!.key === this.hnTreeNode.key),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.setClassMap();
        this.markForCheck();
      });
    this.setClassMap();
  }

  ngOnChanges(): void {
    this.setClassMap();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
