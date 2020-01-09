import {
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Host,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SkipSelf,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  isNotNil,
  InputBoolean,
  NzFormatBeforeDropEvent,
  NzFormatEmitEvent,
  NzNoAnimationDirective,
  NzTreeHigherOrderServiceToken
} from 'ng-zorro-antd/core';

import { NzTreeBase, NzTreeBaseService, NzTreeNode } from '../core';

import { HnTreeService } from './hn-tree.service';

export function NzTreeServiceFactory(
  higherOrderService: NzTreeBaseService,
  treeService: HnTreeService
): NzTreeBaseService {
  return higherOrderService ? higherOrderService : treeService;
}

const NZ_CONFIG_COMPONENT_NAME = 'tree';

@Component({
  selector: 'hn-tree',
  exportAs: 'hnTree',
  templateUrl: './hn-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    HnTreeService,
    {
      provide: NzTreeBaseService,
      useFactory: NzTreeServiceFactory,
      deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], HnTreeService]
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HnTreeComponent),
      multi: true
    }
  ]
})
export class HnTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
  @Input() @InputBoolean() hnShowIcon = false;
  @Input() @InputBoolean() hnShowExpand = true;
  @Input() @InputBoolean() hnShowLine = false;
  @Input() hnExpandedIcon: TemplateRef<{ $implicit: NzTreeNode }>;
  @Input() @InputBoolean() hnCheckable = false;
  @Input() @InputBoolean() hnAsyncData = false;
  @Input() @InputBoolean() hnDraggable = false;

  @Input() @InputBoolean() hnHideUnMatched = false;
  @Input() @InputBoolean() hnSelectMode = false;
  @Input() @InputBoolean() hnCheckStrictly = false;
  @Input() @InputBoolean() hnBlockNode = false;
  @Input() @InputBoolean() hnExpandAll = false;
  @Input() @InputBoolean() hnAccordion = false;
  @Input() hnNodeKey = 'key';
  @Input() hnNodeTitle = 'title';

  @Input() hnTreeTemplate: TemplateRef<{ $implicit: NzTreeNode }>;
  @ContentChild('nzTreeTemplate') hnTreeTemplateChild: TemplateRef<{ $implicit: NzTreeNode }>;
  get treeTemplate(): TemplateRef<{ $implicit: NzTreeNode }> {
    return this.hnTreeTemplate || this.hnTreeTemplateChild;
  }

  /**
   * @deprecated 9.0.0 use `nzExpandAll` instead.
   */
  @Input()
  @InputBoolean()
  set nzDefaultExpandAll(value: boolean) {
    this.hnExpandAll = value;
    this._nzDefaultExpandAll = value;
  }

  get nzDefaultExpandAll(): boolean {
    return this._nzDefaultExpandAll;
  }

  private _nzDefaultExpandAll = false;

  @Input() hnBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;

  @Input() @InputBoolean() hnMultiple = false;

  @Input()
  // tslint:disable-next-line:no-any
  set hnData(value: any[]) {
    this.initNzData(value);
  }

  /**
   * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
   */
  @Input()
  set nzDefaultExpandedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
  }

  /**
   * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
   */
  @Input()
  set nzDefaultSelectedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
  }

  /**
   * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
   */
  @Input()
  set nzDefaultCheckedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
  }

  @Input()
  set nzExpandedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
  }

  @Input()
  set nzSelectedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
  }

  @Input()
  set nzCheckedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
  }

  @Input()
  set hnSearchValue(value: string) {
    this._searchValue = value;
    this.nzTreeService.searchExpand(value);
    if (isNotNil(value)) {
      this.hnSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null) as any);
      /**
       * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
       * Hide warning, need remove next version
       */
      this.hnOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null) as any);
    }
  }

  get hnSearchValue(): string {
    return this._searchValue;
  }

  /**
   * To render nodes if root is changed.
   */
  get hnNodes(): NzTreeNode[] {
    return this.nzTreeService.rootNodes;
  }

  @Output() readonly hnExpandedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly hnSelectedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly hnCheckedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() readonly hnSearchValueChange = new EventEmitter<NzFormatEmitEvent>();

  /**
   * @deprecated use `nzSearchValueChange` instead.
   */
  @Output() readonly hnOnSearchNode = new EventEmitter<NzFormatEmitEvent>();

  @Output() readonly hnClick = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnDblClick = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnContextMenu = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnCheckBoxChange = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnExpandChange = new EventEmitter<NzFormatEmitEvent>();

  @Output() readonly hnOnDragStart = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnOnDragEnter = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnOnDragOver = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnOnDragLeave = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnOnDrop = new EventEmitter<NzFormatEmitEvent>();
  @Output() readonly hnOnDragEnd = new EventEmitter<NzFormatEmitEvent>();

  _searchValue: string;
  nzDefaultSubject = new ReplaySubject<{ type: string; keys: string[] }>(6);
  destroy$ = new Subject();
  prefixCls = 'ant-tree';
  classMap = {};

  onChange: (value: NzTreeNode[]) => void = () => null;
  onTouched: () => void = () => null;

  setClassMap(): void {
    this.classMap = {
      [this.prefixCls]: true,
      [this.prefixCls + '-show-line']: this.hnShowLine,
      [`${this.prefixCls}-icon-hide`]: !this.hnShowIcon,
      [`${this.prefixCls}-block-node`]: this.hnBlockNode,
      ['draggable-tree']: this.hnDraggable,
      ['ant-select-tree']: this.hnSelectMode
    };
  }

  writeValue(value: NzTreeNode[]): void {
    this.initNzData(value);
  }

  registerOnChange(fn: (_: NzTreeNode[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // tslint:disable-next-line:no-any
  initNzData(value: any[]): void {
    if (Array.isArray(value)) {
      const list = this.filterNodes(value);
      this.nzTreeService.isCheckStrictly = this.hnCheckStrictly;
      this.nzTreeService.isMultiple = this.hnMultiple;
      this.nzTreeService.initTree(this.coerceTreeNodes(list));
    }
  }

  /**
   * 处理nodes，设置title与key
   * @param list 数组
   */
  filterNodes(list: any = []) {
    return list.map(item => {
      if (item.children) {
        item.children = this.filterNodes(item.children);
      } else {
        item.children = null;
      }
      return {
        ...item,
        title: item[this.hnNodeTitle],
        key: item[this.hnNodeKey],
        children: item.children
      };
    });
  }

  constructor(
    nzTreeService: NzTreeBaseService,
    private cdr: ChangeDetectorRef,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective
  ) {
    super(nzTreeService);
  }

  ngOnInit(): void {
    this.setClassMap();
    this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data: { type: string; keys: string[] }) => {
      if (!data || !data.keys) {
        return;
      }
      switch (data.type) {
        case 'nzExpandedKeys':
          this.nzTreeService.calcExpandedKeys(data.keys, this.hnNodes);
          this.hnExpandedKeysChange.emit(data.keys);
          break;
        case 'nzSelectedKeys':
          this.nzTreeService.calcSelectedKeys(data.keys, this.hnNodes, this.hnMultiple);
          this.hnSelectedKeysChange.emit(data.keys);
          break;
        case 'nzCheckedKeys':
          this.nzTreeService.calcCheckedKeys(data.keys, this.hnNodes, this.hnCheckStrictly);
          this.hnCheckedKeysChange.emit(data.keys);
          break;
      }
      this.cdr.markForCheck();
    });
    this.nzTreeService
      .eventTriggerChanged()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        switch (data.eventName) {
          case 'expand':
            this.hnExpandChange.emit(data as any);
            break;
          case 'click':
            this.hnClick.emit(data as any);
            break;
          case 'check':
            this.hnCheckBoxChange.emit(data as any);
            break;
          case 'dblclick':
            this.hnDblClick.emit(data as any);
            break;
          case 'contextmenu':
            this.hnContextMenu.emit(data as any);
            break;
          // drag drop
          case 'dragstart':
            this.hnOnDragStart.emit(data as any);
            break;
          case 'dragenter':
            this.hnOnDragEnter.emit(data as any);
            break;
          case 'dragover':
            this.hnOnDragOver.emit(data as any);
            break;
          case 'dragleave':
            this.hnOnDragLeave.emit(data as any);
            break;
          case 'drop':
            this.hnOnDrop.emit(data as any);
            break;
          case 'dragend':
            this.hnOnDragEnd.emit(data as any);
            break;
        }
      });
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes.nzCheckStrictly) {
      this.nzTreeService.isCheckStrictly = this.hnCheckStrictly;
    }
    if (changes.nzMultiple) {
      this.nzTreeService.isMultiple = this.hnMultiple;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
