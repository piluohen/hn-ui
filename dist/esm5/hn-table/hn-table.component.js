/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/hn-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnTableComponent = /** @class */ (function () {
    function HnTableComponent() {
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
    HnTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tableColumns = this.columns.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.render = _this.render[item.renderKey];
            return item;
        }));
        this.getList();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HnTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.params) {
            var _a = changes.params, currentValue = _a.currentValue, firstChange = _a.firstChange;
            if (!firstChange) {
                this.params = currentValue;
                this.getInterfaceList(true);
            }
        }
        if (changes.data) {
            var _b = changes.data, currentValue = _b.currentValue, firstChange = _b.firstChange;
            if (!firstChange) {
                this.data = currentValue;
                this.getLocalData();
            }
        }
    };
    /**
     * 获取数据
     * @param reset 是否重置列表
     */
    /**
     * 获取数据
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    HnTableComponent.prototype.getList = /**
     * 获取数据
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    function (reset) {
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pagination.pageIndex = 1;
        }
        if (this.api && this.data.length === 0) {
            this.getInterfaceList();
        }
        else {
            this.getLocalData();
        }
    };
    /**
     * 获取本地传入数据
     * @param data 本地数据
     */
    /**
     * 获取本地传入数据
     * @return {?}
     */
    HnTableComponent.prototype.getLocalData = /**
     * 获取本地传入数据
     * @return {?}
     */
    function () {
        if (this.showPagination) {
            var _a = this.pagination, pageSize = _a.pageSize, pageIndex = _a.pageIndex;
            /** @type {?} */
            var data = tslib_1.__spread(this.data);
            /** @type {?} */
            var first = pageSize * (pageIndex - 1);
            /** @type {?} */
            var end = pageSize * pageIndex;
            this.tableData = data.slice(first, end);
            this.pagination.total = data.length;
        }
        else {
            this.tableData = this.data || [];
        }
        this.initCheck();
    };
    /**
     * 获取列表数据
     * @param reset 是否重置列表
     */
    /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    HnTableComponent.prototype.getInterfaceList = /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    function (reset, param) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (param === void 0) { param = {}; }
        this.loading = true;
        /** @type {?} */
        var requestParams = tslib_1.__assign({ pageNo: this.pagination.pageIndex, pageSize: this.pagination.pageSize }, this.params, param);
        this.api(requestParams).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res.success) {
                /** @type {?} */
                var data_1 = res.data;
                if (data_1) {
                    _this.pagination.total = data_1[_this.totalKey];
                    _this.tableData = data_1[_this.contentKey].map((/**
                     * @param {?} item
                     * @param {?} i
                     * @return {?}
                     */
                    function (item, i) {
                        return tslib_1.__assign({}, item, { number: (data_1.pageNo - 1) * _this.pagination.pageSize + i + 1 });
                    }));
                    _this.initCheck();
                }
            }
            _this.loading = false;
        }));
    };
    /**
     * 初始化check
     */
    /**
     * 初始化check
     * @return {?}
     */
    HnTableComponent.prototype.initCheck = /**
     * 初始化check
     * @return {?}
     */
    function () {
        this.checkedData = this.tableData || [];
        this.checkAll(false);
    };
    /**
     * 刷新全选
     */
    /**
     * 刷新全选
     * @return {?}
     */
    HnTableComponent.prototype.refreshStatus = /**
     * 刷新全选
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllDisplayDataChecked =
            this.checkedData.length > 0
                ? this.checkedData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !item.disabled; })).every((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.mapOfCheckedId[item.id]; }))
                : false;
        this.isIndeterminate =
            this.checkedData.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.disabled; })).some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.mapOfCheckedId[item.id]; })) &&
                !this.isAllDisplayDataChecked;
        /** @type {?} */
        var checked = this.tableData.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.mapOfCheckedId[item.id]; }));
        this.numberOfChecked = checked.length;
        this.checkChange.emit(checked);
    };
    /**
     * 全选操作
     * @param value 全选值
     */
    /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    HnTableComponent.prototype.checkAll = /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.checkedData.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.disabled; })).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (_this.mapOfCheckedId[item.id] = value); }));
        this.refreshStatus();
    };
    /**
     * 清除选中
     */
    /**
     * 清除选中
     * @return {?}
     */
    HnTableComponent.prototype.clearChecked = /**
     * 清除选中
     * @return {?}
     */
    function () {
        this.checkAll(false);
    };
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
    HnTableComponent.ctorParameters = function () { return []; };
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
    return HnTableComponent;
}());
export { HnTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi10YWJsZS9obi10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBc0RFO1FBN0NTLFNBQUksR0FBVSxFQUFFLENBQUM7UUFJakIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBUSxPQUFPLENBQUM7UUFFeEIsZUFBVSxHQUFRLE1BQU0sQ0FBQztRQUV6QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWhCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQStCLEVBQUUsQ0FBQztRQUNoRCxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVwQixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBRXRCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRXpCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDO0lBRWEsQ0FBQzs7OztJQUVoQixt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Q0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBdExGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsdStEQUF3QztpQkFDekM7Ozs7O3VCQUVFLEtBQUs7c0JBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSzs2QkFFTCxLQUFLOzZCQUVMLEtBQUs7aUNBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLOzhCQUVMLE1BQU07O0lBc0pULHVCQUFDO0NBQUEsQUF2TEQsSUF1TEM7U0EvS1ksZ0JBQWdCOzs7SUFDM0IsZ0NBQTBCOztJQUUxQiwrQkFBa0I7O0lBRWxCLGtDQUEwQjs7SUFFMUIsbUNBQTZCOztJQUU3QixvQ0FBaUM7O0lBRWpDLHNDQUFrQzs7SUFFbEMsc0NBQTJCOztJQUUzQiwwQ0FBK0I7O0lBRS9CLGtDQUEwQjs7SUFFMUIsa0NBQXFCOztJQUVyQixvQ0FBMEI7O0lBRTFCLGtDQUEwQjs7SUFFMUIsdUNBQThEOztJQUU5RCxtREFBZ0M7O0lBQ2hDLHVDQUFvQjs7SUFDcEIsMkNBQXdCOztJQUN4Qix1Q0FBaUI7O0lBQ2pCLDBDQUFnRDs7SUFDaEQsMkNBQW9COztJQUVwQixxQ0FBc0I7O0lBRXRCLHdDQUF5Qjs7SUFFekIsbUNBQWU7O0lBRWYsc0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICdoblRhYmxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhuVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XG5cbiAgQElucHV0KCkgYXBpOiBhbnk7XG5cbiAgQElucHV0KCkgcGFyYW1zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIHRvdGFsS2V5OiBhbnkgPSAndG90YWwnO1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRLZXk6IGFueSA9ICdsaXN0JztcblxuICBASW5wdXQoKSBzaG93U2VsZWN0ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XG5cbiAgQElucHV0KCkgc2Nyb2xsOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBmb290ZXI6IGFueTtcblxuICBASW5wdXQoKSBib3JkZXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHJlbmRlcjogYW55ID0ge307XG5cbiAgQE91dHB1dCgpIGNoZWNrQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpc0FsbERpc3BsYXlEYXRhQ2hlY2tlZCA9IGZhbHNlO1xuICBpc09wZXJhdGluZyA9IGZhbHNlO1xuICBpc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgY2hlY2tlZERhdGEgPSBbXTtcbiAgbWFwT2ZDaGVja2VkSWQ6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIG51bWJlck9mQ2hlY2tlZCA9IDA7XG5cbiAgdGFibGVEYXRhOiBhbnlbXSA9IFtdO1xuXG4gIHRhYmxlQ29sdW1uczogYW55W10gPSBbXTtcblxuICBsb2FkaW5nID0gdHJ1ZTtcblxuICBwYWdpbmF0aW9uID0ge1xuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2VTaXplOiAxMCxcbiAgICBwYWdlSW5kZXg6IDFcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJsZUNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5yZW5kZXIgPSB0aGlzLnJlbmRlcltpdGVtLnJlbmRlcktleV07XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgICB0aGlzLmdldExpc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSkge1xuICAgIGlmIChjaGFuZ2VzLnBhcmFtcykge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLnBhcmFtcztcbiAgICAgIGlmICghZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIHRoaXMuZ2V0SW50ZXJmYWNlTGlzdCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRhdGE7XG4gICAgICBpZiAoIWZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgdGhpcy5nZXRMb2NhbERhdGEoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5pWw5o2uXG4gICAqIEBwYXJhbSByZXNldCDmmK/lkKbph43nva7liJfooahcbiAgICovXG4gIGdldExpc3QocmVzZXQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChyZXNldCkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA9IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLmFwaSAmJiB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmdldEludGVyZmFjZUxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRMb2NhbERhdGEoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5pys5Zyw5Lyg5YWl5pWw5o2uXG4gICAqIEBwYXJhbSBkYXRhIOacrOWcsOaVsOaNrlxuICAgKi9cbiAgZ2V0TG9jYWxEYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlSW5kZXggfSA9IHRoaXMucGFnaW5hdGlvbjtcbiAgICAgIGNvbnN0IGRhdGEgPSBbLi4udGhpcy5kYXRhXTtcbiAgICAgIGNvbnN0IGZpcnN0ID0gcGFnZVNpemUgKiAocGFnZUluZGV4IC0gMSk7XG4gICAgICBjb25zdCBlbmQgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcbiAgICAgIHRoaXMudGFibGVEYXRhID0gZGF0YS5zbGljZShmaXJzdCwgZW5kKTtcbiAgICAgIHRoaXMucGFnaW5hdGlvbi50b3RhbCA9IGRhdGEubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZGF0YSB8fCBbXTtcbiAgICB9XG4gICAgdGhpcy5pbml0Q2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bliJfooajmlbDmja5cbiAgICogQHBhcmFtIHJlc2V0IOaYr+WQpumHjee9ruWIl+ihqFxuICAgKi9cbiAgZ2V0SW50ZXJmYWNlTGlzdChyZXNldDogYm9vbGVhbiA9IGZhbHNlLCBwYXJhbTogYW55ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICBwYWdlTm86IHRoaXMucGFnaW5hdGlvbi5wYWdlSW5kZXgsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplLFxuICAgICAgLi4udGhpcy5wYXJhbXMsXG4gICAgICAuLi5wYXJhbVxuICAgIH07XG4gICAgdGhpcy5hcGkocmVxdWVzdFBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi50b3RhbCA9IGRhdGFbdGhpcy50b3RhbEtleV07XG4gICAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhW3RoaXMuY29udGVudEtleV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBudW1iZXI6IChkYXRhLnBhZ2VObyAtIDEpICogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgaSArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pbml0Q2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyWY2hlY2tcbiAgICovXG4gIGluaXRDaGVjaygpIHtcbiAgICB0aGlzLmNoZWNrZWREYXRhID0gdGhpcy50YWJsZURhdGEgfHwgW107XG4gICAgdGhpcy5jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICog5Yi35paw5YWo6YCJXG4gICAqL1xuICByZWZyZXNoU3RhdHVzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBbGxEaXNwbGF5RGF0YUNoZWNrZWQgPVxuICAgICAgdGhpcy5jaGVja2VkRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gdGhpcy5jaGVja2VkRGF0YS5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCkuZXZlcnkoaXRlbSA9PiB0aGlzLm1hcE9mQ2hlY2tlZElkW2l0ZW0uaWRdKVxuICAgICAgICA6IGZhbHNlO1xuICAgIHRoaXMuaXNJbmRldGVybWluYXRlID1cbiAgICAgIHRoaXMuY2hlY2tlZERhdGEuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uZGlzYWJsZWQpLnNvbWUoaXRlbSA9PiB0aGlzLm1hcE9mQ2hlY2tlZElkW2l0ZW0uaWRdKSAmJlxuICAgICAgIXRoaXMuaXNBbGxEaXNwbGF5RGF0YUNoZWNrZWQ7XG4gICAgY29uc3QgY2hlY2tlZCA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihpdGVtID0+IHRoaXMubWFwT2ZDaGVja2VkSWRbaXRlbS5pZF0pO1xuICAgIHRoaXMubnVtYmVyT2ZDaGVja2VkID0gY2hlY2tlZC5sZW5ndGg7XG4gICAgdGhpcy5jaGVja0NoYW5nZS5lbWl0KGNoZWNrZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOmAieaTjeS9nFxuICAgKiBAcGFyYW0gdmFsdWUg5YWo6YCJ5YC8XG4gICAqL1xuICBjaGVja0FsbCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZERhdGEuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uZGlzYWJsZWQpLmZvckVhY2goaXRlbSA9PiAodGhpcy5tYXBPZkNoZWNrZWRJZFtpdGVtLmlkXSA9IHZhbHVlKSk7XG4gICAgdGhpcy5yZWZyZXNoU3RhdHVzKCk7XG4gIH1cblxuICAvKipcbiAgICog5riF6Zmk6YCJ5LitXG4gICAqL1xuICBjbGVhckNoZWNrZWQoKSB7XG4gICAgdGhpcy5jaGVja0FsbChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==