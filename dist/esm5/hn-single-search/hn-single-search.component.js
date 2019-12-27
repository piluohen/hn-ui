/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/hn-single-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var HnSingleSearchComponent = /** @class */ (function () {
    function HnSingleSearchComponent(fb) {
        this.fb = fb;
        this.formList = [];
        this.style = {};
        this.search = new EventEmitter();
        this.modeVisible = false;
        this.form = {};
        this.resetForm = [];
        this.allChecked = false;
        this.indeterminate = false;
    }
    /**
     * @return {?}
     */
    HnSingleSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    };
    /**
     * 初始化表单
     */
    /**
     * 初始化表单
     * @return {?}
     */
    HnSingleSearchComponent.prototype.initForm = /**
     * 初始化表单
     * @return {?}
     */
    function () {
        this.form = this.setInitForm(this.formList);
    };
    /**
     * 设置初始化表单数据
     * @param arr 数据
     */
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setInitForm = /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    function (arr) {
        /** @type {?} */
        var form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.type === 'checkbox') {
                form[item.key] = tslib_1.__spread(Object.assign([], item.options));
                form[item.checkAll] = false;
                form[item.indeterminate] = false;
            }
            else {
                form[item.key] = item.value || null;
            }
        }));
        return form;
    };
    /**
     * 过滤数组
     * @param data 值：数组
     */
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    HnSingleSearchComponent.prototype.filterArr = /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    function (data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.value;
        }));
    };
    /**
     * picker改变
     */
    /**
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handlePickerChange = /**
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        this.submitForm();
    };
    /**
     * Input 改变
     */
    /**
     * Input 改变
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handleKeyupEnter = /**
     * Input 改变
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * checkbox改变
     */
    /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handleCheckboxChange = /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    function ($event, data) {
        this.setCheckbox(data);
        this.submitForm();
    };
    /**
     * 全选操作
     * @param $event 值
     * @param data 数据
     */
    /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.updateAllChecked = /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    function ($event, data) {
        data.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = $event;
        }));
        if (data.checkAll) {
            this.form[data.checkAll] = $event;
        }
        this.submitForm();
    };
    /**
     * 设置checkbox值
     * @param data 数据
     */
    /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setCheckbox = /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    function (data) {
        if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked; }))) {
            this.form[data.checkAll] = true;
            this.form[data.indeterminate] = false;
        }
        else if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.checked; }))) {
            this.form[data.checkAll] = false;
            this.form[data.indeterminate] = false;
        }
        else {
            this.form[data.indeterminate] = true;
        }
    };
    /**
     * 提交表单
     */
    /**
     * 提交表单
     * @return {?}
     */
    HnSingleSearchComponent.prototype.submitForm = /**
     * 提交表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.form;
        /** @type {?} */
        var params = tslib_1.__assign({}, this.setParams(this.formList, value));
        this.search.emit(params);
    };
    /**
     * 设置data
     * @param data 数据
     */
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setParams = /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    function (arr, data) {
        var _this = this;
        /** @type {?} */
        var params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.children) {
                params = tslib_1.__assign({}, params, _this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    var str = _this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    };
    HnSingleSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-single-search',
                    exportAs: 'hnSingleSearch',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-single-search\" nz-row [ngStyle]=\"style\">\n  <div class=\"hn-single-search-item\" *ngFor=\"let item of formList\">\n    <div class=\"label\">{{item.label}}\uFF1A</div>\n    <nz-input-group *ngIf=\"item.type === 'input'\" nzSearch [nzAddOnAfter]=\"suffixIconSearch\">\n      <input\n        type=\"text\"\n        nz-input\n        [(ngModel)]=\"form[item.key]\"\n        maxlength=\"30\"\n        [placeholder]=\"item.placeholder\"\n        (keyup.enter)=\"handleKeyupEnter()\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <button nz-button nzType=\"primary\" nzSearch (click)=\"handleKeyupEnter()\">\n        <i nz-icon type=\"search\"></i>\u641C\u7D22\n      </button>\n    </ng-template>\n    <nz-month-picker\n      *ngIf=\"item.type === 'month'\"\n      [(ngModel)]=\"form[item.key]\"\n      [nzPlaceHolder]=\"item.placeholder\"\n      (ngModelChange)=\"handlePickerChange($event, item)\"></nz-month-picker>\n    <div *ngIf=\"item.type === 'checkbox'\" class=\"search-checkbox\">\n      <label\n        style=\"margin-right: 8px\"\n        nz-checkbox\n        [(ngModel)]=\"form[item.checkAll]\"\n        (ngModelChange)=\"updateAllChecked($event, item)\"\n        [nzIndeterminate]=\"form[item.indeterminate]\">\n        \u5168\u9009\n      </label>\n      <nz-checkbox-group\n        [(ngModel)]=\"form[item.key]\"\n        (ngModelChange)=\"handleCheckboxChange($event, item)\"></nz-checkbox-group>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnSingleSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    HnSingleSearchComponent.propDecorators = {
        formList: [{ type: Input }],
        render: [{ type: Input }],
        style: [{ type: Input }],
        search: [{ type: Output }]
    };
    return HnSingleSearchComponent;
}());
export { HnSingleSearchComponent };
if (false) {
    /** @type {?} */
    HnSingleSearchComponent.prototype.formList;
    /** @type {?} */
    HnSingleSearchComponent.prototype.render;
    /** @type {?} */
    HnSingleSearchComponent.prototype.style;
    /** @type {?} */
    HnSingleSearchComponent.prototype.search;
    /** @type {?} */
    HnSingleSearchComponent.prototype.modeVisible;
    /** @type {?} */
    HnSingleSearchComponent.prototype.form;
    /** @type {?} */
    HnSingleSearchComponent.prototype.resetForm;
    /** @type {?} */
    HnSingleSearchComponent.prototype.allChecked;
    /** @type {?} */
    HnSingleSearchComponent.prototype.indeterminate;
    /** @type {?} */
    HnSingleSearchComponent.prototype.validateForm;
    /**
     * @type {?}
     * @private
     */
    HnSingleSearchComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2luZ2xlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLXNpbmdsZS1zZWFyY2gvaG4tc2luZ2xlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEU7SUE0QkUsaUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBbkIxQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBSW5CLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFZixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsZ0JBQVcsR0FBUSxLQUFLLENBQUM7UUFFekIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUVmLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUlnQixDQUFDOzs7O0lBRXZDLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMENBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNkNBQVc7Ozs7O0lBQVgs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O0lBQ2hCLENBQUM7O2dCQTNKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxvOUNBQWdEO2lCQUNqRDs7OztnQkFUUSxXQUFXOzs7MkJBV2pCLEtBQUs7eUJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLE1BQU07O0lBNklULDhCQUFDO0NBQUEsQUE1SkQsSUE0SkM7U0FwSlksdUJBQXVCOzs7SUFDbEMsMkNBQTRCOztJQUU1Qix5Q0FBcUI7O0lBRXJCLHdDQUF5Qjs7SUFFekIseUNBQXlEOztJQUV6RCw4Q0FBeUI7O0lBRXpCLHVDQUFlOztJQUVmLDRDQUFvQjs7SUFFcEIsNkNBQW1COztJQUNuQixnREFBc0I7O0lBRXRCLCtDQUF3Qjs7Ozs7SUFFWixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLXNpbmdsZS1zZWFyY2gnLFxuICBleHBvcnRBczogJ2huU2luZ2xlU2VhcmNoJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tc2luZ2xlLXNlYXJjaC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG5TaW5nbGVTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtTGlzdDogYW55ID0gW107XG5cbiAgQElucHV0KCkgcmVuZGVyOiBhbnk7XG5cbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1vZGVWaXNpYmxlOiBhbnkgPSBmYWxzZTtcblxuICBmb3JtOiBhbnkgPSB7fTtcblxuICByZXNldEZvcm06IGFueSA9IFtdO1xuXG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIHZhbGlkYXRlRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVzZXRGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm1MaXN0KSk7XG4gICAgdGhpcy5pbml0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluihqOWNlVxuICAgKi9cbiAgaW5pdEZvcm0oKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5zZXRJbml0Rm9ybSh0aGlzLmZvcm1MaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7liJ3lp4vljJbooajljZXmlbDmja5cbiAgICogQHBhcmFtIGFyciDmlbDmja5cbiAgICovXG4gIHNldEluaXRGb3JtKGFycjogYW55W10pIHtcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcbiAgICBhcnIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgZm9ybVtpdGVtLmtleV0gPSBbLi4uT2JqZWN0LmFzc2lnbihbXSwgaXRlbS5vcHRpb25zKV07XG4gICAgICAgIGZvcm1baXRlbS5jaGVja0FsbF0gPSBmYWxzZTtcbiAgICAgICAgZm9ybVtpdGVtLmluZGV0ZXJtaW5hdGVdID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtW2l0ZW0ua2V5XSA9IGl0ZW0udmFsdWUgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiDov4fmu6TmlbDnu4RcbiAgICogQHBhcmFtIGRhdGEg5YC877ya5pWw57uEXG4gICAqL1xuICBmaWx0ZXJBcnIoZGF0YTogYW55W10pIHtcbiAgICByZXR1cm4gZGF0YVxuICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2hlY2tlZDtcbiAgICAgIH0pXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBpY2tlcuaUueWPmFxuICAgKi9cbiAgaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudDogYW55LCBpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnB1dCDmlLnlj5hcbiAgICovXG4gIGhhbmRsZUtleXVwRW50ZXIoKSB7XG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2tib3jmlLnlj5hcbiAgICovXG4gIGhhbmRsZUNoZWNrYm94Q2hhbmdlKCRldmVudDogYW55LCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldENoZWNrYm94KGRhdGEpO1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOmAieaTjeS9nFxuICAgKiBAcGFyYW0gJGV2ZW50IOWAvFxuICAgKiBAcGFyYW0gZGF0YSDmlbDmja5cbiAgICovXG4gIHVwZGF0ZUFsbENoZWNrZWQoJGV2ZW50OiBhbnksIGRhdGE6IGFueSkge1xuICAgIGRhdGEub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICRldmVudDtcbiAgICB9KTtcbiAgICBpZiAoZGF0YS5jaGVja0FsbCkge1xuICAgICAgdGhpcy5mb3JtW2RhdGEuY2hlY2tBbGxdID0gJGV2ZW50O1xuICAgIH1cbiAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5jaGVja2JveOWAvFxuICAgKiBAcGFyYW0gZGF0YSDmlbDmja5cbiAgICovXG4gIHNldENoZWNrYm94KGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhLm9wdGlvbnMuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQpKSB7XG4gICAgICB0aGlzLmZvcm1bZGF0YS5jaGVja0FsbF0gPSB0cnVlO1xuICAgICAgdGhpcy5mb3JtW2RhdGEuaW5kZXRlcm1pbmF0ZV0gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEub3B0aW9ucy5ldmVyeShpdGVtID0+ICFpdGVtLmNoZWNrZWQpKSB7XG4gICAgICB0aGlzLmZvcm1bZGF0YS5jaGVja0FsbF0gPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9ybVtkYXRhLmluZGV0ZXJtaW5hdGVdID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybVtkYXRhLmluZGV0ZXJtaW5hdGVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5o+Q5Lqk6KGo5Y2VXG4gICAqL1xuICBzdWJtaXRGb3JtKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0geyAuLi50aGlzLnNldFBhcmFtcyh0aGlzLmZvcm1MaXN0LCB2YWx1ZSkgfTtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572uZGF0YVxuICAgKiBAcGFyYW0gZGF0YSDmlbDmja5cbiAgICovXG4gIHNldFBhcmFtcyhhcnI6IGFueSwgZGF0YTogYW55KSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgcGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLnRoaXMuc2V0UGFyYW1zKGl0ZW0uY2hpbGRyZW4sIGRhdGEpIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5maWx0ZXJBcnIoZGF0YVtpdGVtLmtleV0pLmpvaW4oJywnKSB8fCBudWxsO1xuICAgICAgICAgIHBhcmFtc1tpdGVtLmtleV0gPSBzdHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zW2l0ZW0ua2V5XSA9IGRhdGFbaXRlbS5rZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxufVxuIl19