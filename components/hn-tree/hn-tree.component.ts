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

import { isNotNil, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';

import {
  HnTreeBase,
  HnTreeBaseService,
  HnTreeNode,
  HnFormatBeforeDropEvent,
  HnFormatEmitEvent,
  HnTreeHigherOrderServiceToken
} from 'hn-ui/core';

import { HnTreeService } from './hn-tree.service';

export function HnTreeServiceFactory(higherOrderService: HnTreeBaseService, treeService: HnTreeService) {
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
      provide: HnTreeBaseService,
      useFactory: HnTreeServiceFactory,
      deps: [[new SkipSelf(), new Optional(), HnTreeHigherOrderServiceToken], HnTreeService]
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HnTreeComponent),
      multi: true
    }
  ]
})
export class HnTreeComponent extends HnTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
  @Input() @InputBoolean() hnShowIcon = false;
  @Input() @InputBoolean() hnShowExpand = true;
  @Input() @InputBoolean() hnShowLine = false;
  @Input() hnExpandedIcon: TemplateRef<{ $implicit: HnTreeNode }>;
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

  @Input() hnTreeTemplate: TemplateRef<{ $implicit: HnTreeNode }>;
  @ContentChild('nzTreeTemplate') hnTreeTemplateChild: TemplateRef<{ $implicit: HnTreeNode }>;
  get treeTemplate(): TemplateRef<{ $implicit: HnTreeNode }> {
    return this.hnTreeTemplate || this.hnTreeTemplateChild;
  }

  /**
   * @deprecated 9.0.0 use `nzExpandAll` instead.
   */
  @Input()
  @InputBoolean()
  set hnDefaultExpandAll(value: boolean) {
    this.hnExpandAll = value;
    this._nzDefaultExpandAll = value;
  }

  get hnDefaultExpandAll(): boolean {
    return this._nzDefaultExpandAll;
  }

  private _nzDefaultExpandAll = false;

  @Input() hnBeforeDrop: (confirm: HnFormatBeforeDropEvent) => Observable<boolean>;

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
  set hnDefaultExpandedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
  }

  /**
   * @deprecated 9.0.0 - use `nzSelectedKeys` instead.
   */
  @Input()
  set hnDefaultSelectedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
  }

  /**
   * @deprecated 9.0.0 - use `nzCheckedKeys` instead.
   */
  @Input()
  set hnDefaultCheckedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
  }

  @Input()
  set hnExpandedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
  }

  @Input()
  set hnSelectedKeys(value: string[]) {
    this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
  }

  @Input()
  set hnCheckedKeys(value: string[]) {
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
  get hnNodes(): HnTreeNode[] {
    return this.nzTreeService.rootNodes;
  }

  @Output() readonly hnExpandedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly hnSelectedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly hnCheckedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() readonly hnSearchValueChange = new EventEmitter<HnFormatEmitEvent>();

  /**
   * @deprecated use `nzSearchValueChange` instead.
   */
  @Output() readonly hnOnSearchNode = new EventEmitter<HnFormatEmitEvent>();

  @Output() readonly hnClick = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnDblClick = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnContextMenu = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnCheckBoxChange = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnExpandChange = new EventEmitter<HnFormatEmitEvent>();

  @Output() readonly hnOnDragStart = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnOnDragEnter = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnOnDragOver = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnOnDragLeave = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnOnDrop = new EventEmitter<HnFormatEmitEvent>();
  @Output() readonly hnOnDragEnd = new EventEmitter<HnFormatEmitEvent>();

  _searchValue: string;
  nzDefaultSubject = new ReplaySubject<{ type: string; keys: string[] }>(6);
  destroy$ = new Subject();
  prefixCls = 'ant-tree';
  classMap = {};

  onChange: (value: HnTreeNode[]) => void = () => null;
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

  writeValue(value: HnTreeNode[]): void {
    this.initNzData(value);
  }

  registerOnChange(fn: (_: HnTreeNode[]) => void): void {
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
    nzTreeService: HnTreeBaseService,
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
    if (changes.hnCheckStrictly) {
      this.nzTreeService.isCheckStrictly = this.hnCheckStrictly;
    }
    if (changes.hnMultiple) {
      this.nzTreeService.isMultiple = this.hnMultiple;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
