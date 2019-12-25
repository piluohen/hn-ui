import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnChanges,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'hn-table',
  exportAs: 'hnTable',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './hn-table.component.html'
})
export class HnTableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];

  @Input() api: any;

  @Input() params: any = {};

  @Input() columns: any[] = [];

  @Input() totalKey: any = 'total';

  @Input() contentKey: any = 'list';

  @Input() showSelect = true;

  @Input() showPagination = true;

  @Input() scroll: any = {};

  @Input() footer: any;

  @Input() bordered = false;

  @Input() render: any = {};

  @Output() checkChange: EventEmitter<any> = new EventEmitter();

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  checkedData = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  tableData: any[] = [];

  tableColumns: any[] = [];

  loading = true;

  pagination = {
    total: 0,
    pageSize: 10,
    pageIndex: 1
  };

  constructor() {}

  ngOnInit() {
    this.tableColumns = this.columns.map(item => {
      item.render = this.render[item.renderKey];
      return item;
    });
    this.getList();
  }

  ngOnChanges(changes: any) {
    if (changes.params) {
      const { currentValue, firstChange } = changes.params;
      if (!firstChange) {
        this.params = currentValue;
        this.getInterfaceList(true);
      }
    }
    if (changes.data) {
      const { currentValue, firstChange } = changes.data;
      if (!firstChange) {
        this.data = currentValue;
        this.getLocalData();
      }
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
      this.getInterfaceList();
    } else {
      this.getLocalData();
    }
  }

  /**
   * 获取本地传入数据
   * @param data 本地数据
   */
  getLocalData(): void {
    if (this.showPagination) {
      const { pageSize, pageIndex } = this.pagination;
      const data = [...this.data];
      const first = pageSize * (pageIndex - 1);
      const end = pageSize * pageIndex;
      this.tableData = data.slice(first, end);
      this.pagination.total = data.length;
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
          this.pagination.total = data[this.totalKey];
          this.tableData = data[this.contentKey].map((item, i) => {
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
}
