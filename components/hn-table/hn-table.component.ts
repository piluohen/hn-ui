/**
 * @name hn-table
 * @author piluohen<1012106967@qq.com>
 * @date: 2020-01-16 15:13:40
 */

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NzTableComponent } from 'ng-zorro-antd';

@Component({
  selector: 'hn-table',
  exportAs: 'hnTable',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-table.component.html'
})
export class HnTableComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('table') table: NzTableComponent;

  // 静态数据数组
  @Input() data: any[] = [];
  // 接口请求api
  @Input() api: any;
  // 尺寸 'middle'｜'small'｜'default'
  @Input() size = 'default';
  // 请求参数
  @Input() params: any = {};
  // 表格列数据
  @Input() columns: any[] = [];
  // 总计
  @Input() totalKey: any = 'total';
  // 内容列表字段
  @Input() contentKey: any = 'list';
  // 是否显示选择框
  @Input() showSelect = true;

  // 是否显示分页
  @Input() showPagination = true;
  // 分页器位置 'top'｜'bottom'｜'both'
  @Input() paginationPosition = 'bottom';
  // 配置分页
  @Input() pagination = {
    pageSize: 10,
    pageIndex: 1
  };
  // 分页数量菜单
  @Input() pageSizeOptions = [10, 20, 30, 40, 50];
  // 分页是否可改变每页数量
  @Input() showSizeChanger = true;
  // 分页是否允许页码跳转
  @Input() showQuickJumper = false;
  // 只有一页数据时是否隐藏分页
  @Input() hideOnSinglePage = false;
  // 是否是简单分页
  @Input() simplePage = false;

  // 滚动区域配置
  @Input() scroll: any = {};
  // 底部
  @Input() footer: any;
  // 是否border
  @Input() bordered = false;
  // render函数
  @Input() render: any = {};

  // 是否开启虚拟滚动
  @Input() virtualScroll = false;
  @Input() virtualItemSize = 54;
  @Input() virtualMaxBufferPx = 200;
  @Input() virtualMinBufferPx = 100;

  // 多选选中事件
  @Output()
  checkChange: EventEmitter<any> = new EventEmitter();

  @Output()
  virtualChange: EventEmitter<any> = new EventEmitter();

  // 多选相关变量start
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  checkedData = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  // 多选相关变量end

  // 表格数据数组
  tableData: any[] = [];
  // 表格列
  tableColumns: any[] = [];
  // 加载中
  loading = true;
  // 总条数
  total = 0;

  destroy$ = new Subject();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.setPageSizeOptions();
    this.setTableColumns();
    this.getList();
  }

  ngOnChanges(changes: any) {
    if (changes.params) {
      const { currentValue, firstChange } = changes.params;
      if (!firstChange) {
        this.params = currentValue;
        this.getList(true);
      }
    }
    if (changes.columns) {
      const { currentValue, firstChange } = changes.columns;
      if (!firstChange) {
        this.tableColumns = currentValue;
        this.getList(true);
      }
    }
    if (changes.api) {
      const { currentValue, firstChange } = changes.api;
      if (!firstChange) {
        this.api = currentValue;
        this.getList(true);
      }
    }
    if (changes.data) {
      const { currentValue, firstChange } = changes.data;
      if (!firstChange) {
        this.data = currentValue;
        this.getList();
      }
    }
  }

  ngAfterViewInit() {
    this.handleVirtualChange();
  }

  ngOnDestroy() {
    if (this.virtualScroll) {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  /**
   * 设置分页数量配置
   */
  private setPageSizeOptions(): void {
    const sizes = [...this.pageSizeOptions, this.pagination.pageSize].sort((a, b) => {
      return a - b;
    });

    this.pageSizeOptions = [...Array.from(new Set(sizes))];
  }

  /**
   * 设置表格columns
   */
  private setTableColumns() {
    const length = Object.keys(this.render).length;
    if (length > 0) {
      this.tableColumns = [...this.columns].map(item => {
        if (item.renderKey) {
          item.render = this.render[item.renderKey];
        }
        return item;
      });
    } else {
      this.tableColumns = this.columns;
    }
  }

  /**
   * 获取数据
   * @param reset 是否重置列表
   */
  getList(reset: boolean = false) {
    if (reset) {
      this.pagination.pageIndex = 1;
    }
    if (this.api && this.data.length === 0) {
      this.getInterfaceList(reset);
    } else {
      this.getLocalData();
    }
  }

  /**
   * 获取本地传入数据
   * @param data 本地数据
   */
  getLocalData(): void {
    this.total = this.data.length;
    if (this.showPagination) {
      const { pageSize, pageIndex } = this.pagination;
      const data = [...this.data];
      const first = pageSize * (pageIndex - 1);
      const end = pageSize * pageIndex;
      this.tableData = data.slice(first, end);
    } else {
      this.tableData = this.data || [];
    }
    this.initCheck();
  }

  /**
   * 获取列表数据
   * @param reset 是否重置列表
   */
  getInterfaceList(reset: boolean = false, param: any = {}): void {
    this.loading = true;
    const requestParams = {
      pageNo: this.pagination.pageIndex,
      pageSize: this.pagination.pageSize,
      ...this.params,
      ...param
    };
    this.api(requestParams).subscribe(res => {
      if (res.success) {
        const data = res.data;
        if (data) {
          this.total = data[this.totalKey];
          this.tableData = [...data[this.contentKey]].map((item, i) => {
            return {
              ...item,
              number: (data.pageNo - 1) * this.pagination.pageSize + i + 1
            };
          });
          this.initCheck();
        }
      }
      this.loading = false;
    });
  }

  /**
   * 初始化check
   */
  initCheck() {
    this.checkedData = this.tableData || [];
    this.checkAll(false);
  }

  /**
   * 刷新全选
   */
  refreshStatus(): void {
    this.isAllDisplayDataChecked =
      this.checkedData.length > 0
        ? this.checkedData.filter(item => !item.disabled).every(item => this.mapOfCheckedId[item.id])
        : false;
    this.isIndeterminate =
      this.checkedData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    const checked = this.tableData.filter(item => this.mapOfCheckedId[item.id]);
    this.numberOfChecked = checked.length;
    this.checkChange.emit(checked);
    this.cd.markForCheck();
  }

  /**
   * 全选操作
   * @param value 全选值
   */
  checkAll(value: boolean): void {
    this.checkedData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  /**
   * 清除选中
   */
  clearChecked() {
    this.checkAll(false);
  }

  /**
   * 虚拟滚动监听
   */
  handleVirtualChange() {
    if (this.virtualScroll) {
      this.table.cdkVirtualScrollViewport.scrolledIndexChange.pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.virtualChange.emit(data);
      });
    }
  }
}
