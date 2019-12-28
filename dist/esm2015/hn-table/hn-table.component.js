/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/hn-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnTableComponent {
    constructor() {
        this.data = [];
        this.params = {};
        this.columns = [];
        this.totalKey = 'total';
        this.contentKey = 'list';
        this.showSelect = true;
        this.showPagination = true;
        this.scroll = {};
        this.bordered = false;
        this.render = {};
        this.checkChange = new EventEmitter();
        this.isAllDisplayDataChecked = false;
        this.isOperating = false;
        this.isIndeterminate = false;
        this.checkedData = [];
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.tableData = [];
        this.tableColumns = [];
        this.loading = true;
        this.pagination = {
            total: 0,
            pageSize: 10,
            pageIndex: 1
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tableColumns = this.columns.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.render = this.render[item.renderKey];
            return item;
        }));
        this.getList();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    getList(reset = false) {
        if (reset) {
            this.pagination.pageIndex = 1;
        }
        if (this.api && this.data.length === 0) {
            this.getInterfaceList();
        }
        else {
            this.getLocalData();
        }
    }
    /**
     * 获取本地传入数据
     * @return {?}
     */
    getLocalData() {
        if (this.showPagination) {
            const { pageSize, pageIndex } = this.pagination;
            /** @type {?} */
            const data = [...this.data];
            /** @type {?} */
            const first = pageSize * (pageIndex - 1);
            /** @type {?} */
            const end = pageSize * pageIndex;
            this.tableData = data.slice(first, end);
            this.pagination.total = data.length;
        }
        else {
            this.tableData = this.data || [];
        }
        this.initCheck();
    }
    /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    getInterfaceList(reset = false, param = {}) {
        this.loading = true;
        /** @type {?} */
        const requestParams = Object.assign({ pageNo: this.pagination.pageIndex, pageSize: this.pagination.pageSize }, this.params, param);
        this.api(requestParams).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res.success) {
                /** @type {?} */
                const data = res.data;
                if (data) {
                    this.pagination.total = data[this.totalKey];
                    this.tableData = data[this.contentKey].map((/**
                     * @param {?} item
                     * @param {?} i
                     * @return {?}
                     */
                    (item, i) => {
                        return Object.assign({}, item, { number: (data.pageNo - 1) * this.pagination.pageSize + i + 1 });
                    }));
                    this.initCheck();
                }
            }
            this.loading = false;
        }));
    }
    /**
     * 初始化check
     * @return {?}
     */
    initCheck() {
        this.checkedData = this.tableData || [];
        this.checkAll(false);
    }
    /**
     * 刷新全选
     * @return {?}
     */
    refreshStatus() {
        this.isAllDisplayDataChecked =
            this.checkedData.length > 0
                ? this.checkedData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => !item.disabled)).every((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.mapOfCheckedId[item.id]))
                : false;
        this.isIndeterminate =
            this.checkedData.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !item.disabled)).some((/**
             * @param {?} item
             * @return {?}
             */
            item => this.mapOfCheckedId[item.id])) &&
                !this.isAllDisplayDataChecked;
        /** @type {?} */
        const checked = this.tableData.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => this.mapOfCheckedId[item.id]));
        this.numberOfChecked = checked.length;
        this.checkChange.emit(checked);
    }
    /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    checkAll(value) {
        this.checkedData.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.disabled)).forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (this.mapOfCheckedId[item.id] = value)));
        this.refreshStatus();
    }
    /**
     * 清除选中
     * @return {?}
     */
    clearChecked() {
        this.checkAll(false);
    }
}
HnTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'hn-table',
                exportAs: 'hnTable',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div class=\"hn-table\">\n  <nz-table\n    #basicTable\n    [nzData]=\"tableData\"\n    [nzShowPagination]=\"showPagination\"\n    [nzFrontPagination]=\"false\"\n    nzShowSizeChanger\n    [nzBordered]=\"bordered\"\n    [nzScroll]=\"scroll\"\n    [nzShowTotal]=\"totalTemp\"\n    [nzTotal]=\"pagination.total\"\n    [(nzPageIndex)]=\"pagination.pageIndex\"\n    [(nzPageSize)]=\"pagination.pageSize\"\n    (nzPageIndexChange)=\"getList()\"\n    [nzFooter]=\"footer\">\n    <thead>\n      <tr>\n        <th\n          *ngIf=\"showSelect\"\n          nzLeft=\"0px\"\n          nzWidth=\"80px\"\n          nzShowCheckbox\n          [(nzChecked)]=\"isAllDisplayDataChecked\"\n          [nzIndeterminate]=\"isIndeterminate\"\n          (nzCheckedChange)=\"checkAll($event)\"></th>\n        <th\n          *ngFor=\"let item of tableColumns\"\n          [nzWidth]=\"item.width\"\n          [nzAlign]=\"item.align\"\n          [nzLeft]=\"item.left\"\n          [nzRight]=\"item.right\">\n          {{item.title}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of basicTable.data\">\n        <td\n          *ngIf=\"showSelect\"\n          nzLeft=\"0px\"\n          nzShowCheckbox\n          [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n          [nzDisabled]=\"data.disabled\"\n          (nzCheckedChange)=\"refreshStatus()\"></td>\n        <td\n          *ngFor=\"let item of tableColumns;index as index\"\n          [nzAlign]=\"item.align\"\n          [nzLeft]=\"item.left\"\n          [nzRight]=\"item.right\">\n          <span *ngIf=\"!item.render\">{{item.format ? item.format(data) : data[item.key]}}</span>\n          <ng-template [ngIf]=\"item.render\" [ngTemplateOutlet]=\"item.render\"\n            [ngTemplateOutletContext]=\"{ $implicit: {data: data, item: item}, index: index }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n    <ng-template #totalTemp>\n      <span>\u603B\u8BA1{{pagination.total}}\u6761</span>\n    </ng-template>\n  </nz-table>\n</div>\n"
            }] }
];
/** @nocollapse */
HnTableComponent.ctorParameters = () => [];
HnTableComponent.propDecorators = {
    data: [{ type: Input }],
    api: [{ type: Input }],
    params: [{ type: Input }],
    columns: [{ type: Input }],
    totalKey: [{ type: Input }],
    contentKey: [{ type: Input }],
    showSelect: [{ type: Input }],
    showPagination: [{ type: Input }],
    scroll: [{ type: Input }],
    footer: [{ type: Input }],
    bordered: [{ type: Input }],
    render: [{ type: Input }],
    checkChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HnTableComponent.prototype.data;
    /** @type {?} */
    HnTableComponent.prototype.api;
    /** @type {?} */
    HnTableComponent.prototype.params;
    /** @type {?} */
    HnTableComponent.prototype.columns;
    /** @type {?} */
    HnTableComponent.prototype.totalKey;
    /** @type {?} */
    HnTableComponent.prototype.contentKey;
    /** @type {?} */
    HnTableComponent.prototype.showSelect;
    /** @type {?} */
    HnTableComponent.prototype.showPagination;
    /** @type {?} */
    HnTableComponent.prototype.scroll;
    /** @type {?} */
    HnTableComponent.prototype.footer;
    /** @type {?} */
    HnTableComponent.prototype.bordered;
    /** @type {?} */
    HnTableComponent.prototype.render;
    /** @type {?} */
    HnTableComponent.prototype.checkChange;
    /** @type {?} */
    HnTableComponent.prototype.isAllDisplayDataChecked;
    /** @type {?} */
    HnTableComponent.prototype.isOperating;
    /** @type {?} */
    HnTableComponent.prototype.isIndeterminate;
    /** @type {?} */
    HnTableComponent.prototype.checkedData;
    /** @type {?} */
    HnTableComponent.prototype.mapOfCheckedId;
    /** @type {?} */
    HnTableComponent.prototype.numberOfChecked;
    /** @type {?} */
    HnTableComponent.prototype.tableData;
    /** @type {?} */
    HnTableComponent.prototype.tableColumns;
    /** @type {?} */
    HnTableComponent.prototype.loading;
    /** @type {?} */
    HnTableComponent.prototype.pagination;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi10YWJsZS9obi10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLGdCQUFnQjtJQThDM0I7UUE3Q1MsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUlqQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsYUFBUSxHQUFRLE9BQU8sQ0FBQztRQUV4QixlQUFVLEdBQVEsTUFBTSxDQUFDO1FBRXpCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUlqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFaEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBK0IsRUFBRSxDQUFDO1FBQ2hELG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFFdEIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFFekIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGVBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUM7SUFF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TCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzs2QkFFTCxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLO3FCQUVMLEtBQUs7MEJBRUwsTUFBTTs7OztJQXhCUCxnQ0FBMEI7O0lBRTFCLCtCQUFrQjs7SUFFbEIsa0NBQTBCOztJQUUxQixtQ0FBNkI7O0lBRTdCLG9DQUFpQzs7SUFFakMsc0NBQWtDOztJQUVsQyxzQ0FBMkI7O0lBRTNCLDBDQUErQjs7SUFFL0Isa0NBQTBCOztJQUUxQixrQ0FBcUI7O0lBRXJCLG9DQUEwQjs7SUFFMUIsa0NBQTBCOztJQUUxQix1Q0FBOEQ7O0lBRTlELG1EQUFnQzs7SUFDaEMsdUNBQW9COztJQUNwQiwyQ0FBd0I7O0lBQ3hCLHVDQUFpQjs7SUFDakIsMENBQWdEOztJQUNoRCwyQ0FBb0I7O0lBRXBCLHFDQUFzQjs7SUFFdEIsd0NBQXlCOztJQUV6QixtQ0FBZTs7SUFFZixzQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tdGFibGUnLFxuICBleHBvcnRBczogJ2huVGFibGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG5UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcblxuICBASW5wdXQoKSBhcGk6IGFueTtcblxuICBASW5wdXQoKSBwYXJhbXM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdID0gW107XG5cbiAgQElucHV0KCkgdG90YWxLZXk6IGFueSA9ICd0b3RhbCc7XG5cbiAgQElucHV0KCkgY29udGVudEtleTogYW55ID0gJ2xpc3QnO1xuXG4gIEBJbnB1dCgpIHNob3dTZWxlY3QgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcblxuICBASW5wdXQoKSBzY3JvbGw6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpIGZvb3RlcjogYW55O1xuXG4gIEBJbnB1dCgpIGJvcmRlcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcmVuZGVyOiBhbnkgPSB7fTtcblxuICBAT3V0cHV0KCkgY2hlY2tDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzQWxsRGlzcGxheURhdGFDaGVja2VkID0gZmFsc2U7XG4gIGlzT3BlcmF0aW5nID0gZmFsc2U7XG4gIGlzSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBjaGVja2VkRGF0YSA9IFtdO1xuICBtYXBPZkNoZWNrZWRJZDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgbnVtYmVyT2ZDaGVja2VkID0gMDtcblxuICB0YWJsZURhdGE6IGFueVtdID0gW107XG5cbiAgdGFibGVDb2x1bW5zOiBhbnlbXSA9IFtdO1xuXG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIHBhZ2luYXRpb24gPSB7XG4gICAgdG90YWw6IDAsXG4gICAgcGFnZVNpemU6IDEwLFxuICAgIHBhZ2VJbmRleDogMVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhYmxlQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLnJlbmRlciA9IHRoaXMucmVuZGVyW2l0ZW0ucmVuZGVyS2V5XTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0TGlzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKGNoYW5nZXMucGFyYW1zKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMucGFyYW1zO1xuICAgICAgaWYgKCFmaXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgdGhpcy5nZXRJbnRlcmZhY2VMaXN0KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMuZGF0YTtcbiAgICAgIGlmICghZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gY3VycmVudFZhbHVlO1xuICAgICAgICB0aGlzLmdldExvY2FsRGF0YSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmlbDmja5cbiAgICogQHBhcmFtIHJlc2V0IOaYr+WQpumHjee9ruWIl+ihqFxuICAgKi9cbiAgZ2V0TGlzdChyZXNldDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHJlc2V0KSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUluZGV4ID0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXBpICYmIHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZ2V0SW50ZXJmYWNlTGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldExvY2FsRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmnKzlnLDkvKDlhaXmlbDmja5cbiAgICogQHBhcmFtIGRhdGEg5pys5Zyw5pWw5o2uXG4gICAqL1xuICBnZXRMb2NhbERhdGEoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgcGFnZVNpemUsIHBhZ2VJbmRleCB9ID0gdGhpcy5wYWdpbmF0aW9uO1xuICAgICAgY29uc3QgZGF0YSA9IFsuLi50aGlzLmRhdGFdO1xuICAgICAgY29uc3QgZmlyc3QgPSBwYWdlU2l6ZSAqIChwYWdlSW5kZXggLSAxKTtcbiAgICAgIGNvbnN0IGVuZCA9IHBhZ2VTaXplICogcGFnZUluZGV4O1xuICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhLnNsaWNlKGZpcnN0LCBlbmQpO1xuICAgICAgdGhpcy5wYWdpbmF0aW9uLnRvdGFsID0gZGF0YS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5kYXRhIHx8IFtdO1xuICAgIH1cbiAgICB0aGlzLmluaXRDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluWIl+ihqOaVsOaNrlxuICAgKiBAcGFyYW0gcmVzZXQg5piv5ZCm6YeN572u5YiX6KGoXG4gICAqL1xuICBnZXRJbnRlcmZhY2VMaXN0KHJlc2V0OiBib29sZWFuID0gZmFsc2UsIHBhcmFtOiBhbnkgPSB7fSk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIHBhZ2VObzogdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUsXG4gICAgICAuLi50aGlzLnBhcmFtcyxcbiAgICAgIC4uLnBhcmFtXG4gICAgfTtcbiAgICB0aGlzLmFwaShyZXF1ZXN0UGFyYW1zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnRvdGFsID0gZGF0YVt0aGlzLnRvdGFsS2V5XTtcbiAgICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IGRhdGFbdGhpcy5jb250ZW50S2V5XS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgIG51bWJlcjogKGRhdGEucGFnZU5vIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUgKyBpICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmluaXRDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJZjaGVja1xuICAgKi9cbiAgaW5pdENoZWNrKCkge1xuICAgIHRoaXMuY2hlY2tlZERhdGEgPSB0aGlzLnRhYmxlRGF0YSB8fCBbXTtcbiAgICB0aGlzLmNoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliLfmlrDlhajpgIlcbiAgICovXG4gIHJlZnJlc2hTdGF0dXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FsbERpc3BsYXlEYXRhQ2hlY2tlZCA9XG4gICAgICB0aGlzLmNoZWNrZWREYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyB0aGlzLmNoZWNrZWREYXRhLmZpbHRlcihpdGVtID0+ICFpdGVtLmRpc2FibGVkKS5ldmVyeShpdGVtID0+IHRoaXMubWFwT2ZDaGVja2VkSWRbaXRlbS5pZF0pXG4gICAgICAgIDogZmFsc2U7XG4gICAgdGhpcy5pc0luZGV0ZXJtaW5hdGUgPVxuICAgICAgdGhpcy5jaGVja2VkRGF0YS5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCkuc29tZShpdGVtID0+IHRoaXMubWFwT2ZDaGVja2VkSWRbaXRlbS5pZF0pICYmXG4gICAgICAhdGhpcy5pc0FsbERpc3BsYXlEYXRhQ2hlY2tlZDtcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy50YWJsZURhdGEuZmlsdGVyKGl0ZW0gPT4gdGhpcy5tYXBPZkNoZWNrZWRJZFtpdGVtLmlkXSk7XG4gICAgdGhpcy5udW1iZXJPZkNoZWNrZWQgPSBjaGVja2VkLmxlbmd0aDtcbiAgICB0aGlzLmNoZWNrQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5pON5L2cXG4gICAqIEBwYXJhbSB2YWx1ZSDlhajpgInlgLxcbiAgICovXG4gIGNoZWNrQWxsKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkRGF0YS5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCkuZm9yRWFjaChpdGVtID0+ICh0aGlzLm1hcE9mQ2hlY2tlZElkW2l0ZW0uaWRdID0gdmFsdWUpKTtcbiAgICB0aGlzLnJlZnJlc2hTdGF0dXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTpgInkuK1cbiAgICovXG4gIGNsZWFyQ2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrQWxsKGZhbHNlKTtcbiAgfVxufVxuIl19