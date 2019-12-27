/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/hn-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var HnSearchComponent = /** @class */ (function () {
    function HnSearchComponent(fb) {
        this.fb = fb;
        this.formList = [];
        this.keyword = 'searchContent';
        this.placeholder = '请输入查询条件';
        this.search = new EventEmitter();
        this.modeVisible = false;
        this.form = {};
        this.resetForm = [];
    }
    /**
     * @return {?}
     */
    HnSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form[this.keyword] = null;
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
    HnSearchComponent.prototype.initForm = /**
     * 初始化表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var form = this.setInitForm(this.formList);
        this.validateForm = this.fb.group(tslib_1.__assign({}, form));
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
    HnSearchComponent.prototype.setInitForm = /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    function (arr) {
        var _this = this;
        /** @type {?} */
        var form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.children) {
                form = tslib_1.__assign({}, form, _this.setInitForm(item.children));
            }
            else {
                if (item.type === 'checkbox') {
                    form[item.key] = [Object.assign([], item.options)];
                }
                else {
                    form[item.key] = [null];
                }
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
    HnSearchComponent.prototype.filterArr = /**
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
     * 切换高级搜索
     */
    /**
     * 切换高级搜索
     * @return {?}
     */
    HnSearchComponent.prototype.handleToggle = /**
     * 切换高级搜索
     * @return {?}
     */
    function () {
        this.modeVisible = !this.modeVisible;
    };
    /**
     * 取消操作
     */
    /**
     * 取消操作
     * @return {?}
     */
    HnSearchComponent.prototype.handleCancle = /**
     * 取消操作
     * @return {?}
     */
    function () {
        this.modeVisible = false;
    };
    /**
     * 重置表单
     */
    /**
     * 重置表单
     * @return {?}
     */
    HnSearchComponent.prototype.handleReset = /**
     * 重置表单
     * @return {?}
     */
    function () {
        this.formList = JSON.parse(JSON.stringify(tslib_1.__spread(this.resetForm)));
        this.initForm();
        this.search.emit(tslib_1.__assign({}, this.form));
    };
    /**
     * 确认操作
     */
    /**
     * 确认操作
     * @return {?}
     */
    HnSearchComponent.prototype.handleConfirm = /**
     * 确认操作
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * 键盘enter事件
     */
    /**
     * 键盘enter事件
     * @return {?}
     */
    HnSearchComponent.prototype.handleKeyupEnter = /**
     * 键盘enter事件
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * 提交表单
     */
    /**
     * 提交表单
     * @return {?}
     */
    HnSearchComponent.prototype.submitForm = /**
     * 提交表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.validateForm.value;
        /** @type {?} */
        var params = tslib_1.__assign({}, this.form, this.setParams(this.formList, value));
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
    HnSearchComponent.prototype.setParams = /**
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
    HnSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-search',
                    exportAs: 'hnSearch',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-search\">\n  <div *ngIf=\"render\" class=\"hn-search-simple\">\n    <ng-template [ngTemplateOutlet]=\"render\">\n    </ng-template>\n  </div>\n  <div *ngIf=\"!render\" class=\"hn-search-simple\">\n    <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconSearch\">\n      <input\n        type=\"text\"\n        nz-input\n        [(ngModel)]=\"form[keyword]\"\n        maxlength=\"30\"\n        [placeholder]=\"placeholder\"\n        (keyup.enter)=\"handleKeyupEnter()\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <button nz-button nzType=\"primary\" nzSearch (click)=\"handleKeyupEnter()\">\n        <i nz-icon type=\"search\"></i>\u641C\u7D22\n      </button>\n    </ng-template>\n    <button\n      *ngIf=\"formList && formList.length > 0\"\n      nz-button\n      nzType=\"link\"\n      (click)=\"handleToggle()\">\u9AD8\u7EA7\u641C\u7D22\n      <i nz-icon [nzType]=\"modeVisible ? 'up' : 'down'\" nzTheme=\"outline\"></i>\n    </button>\n  </div>\n  <div class=\"search-popover\" *ngIf=\"modeVisible\">\n    <form class=\"search-popover-form\" nz-form nzLayout=\"horizontal\" [formGroup]=\"validateForm\">\n      <div nz-row [nzGutter]=\"20\">\n        <div nz-col [nzSpan]=\"item.col || 6\" *ngFor=\"let item of formList\">\n          <nz-form-item nzFlex>\n            <nz-form-label nzFor=\"note\">{{item.label.title || item.label}}</nz-form-label>\n            <nz-form-control style=\"flex: 1;\">\n              <input\n                *ngIf=\"item.type === 'input'\"\n                type=\"text\"\n                nz-input\n                maxlength=\"30\"\n                [formControlName]=\"item.key\" />\n              <nz-range-picker\n                *ngIf=\"item.type === 'range'\"\n                [nzDisabledDate]=\"item.disabledDate\"\n                [nzDisabledTime]=\"item.disabledTime\"\n                [formControlName]=\"item.key\"></nz-range-picker>\n              <nz-date-picker\n                *ngIf=\"item.type === 'date'\"\n                [nzDisabledDate]=\"item.disabledDate\"\n                [nzDisabledTime]=\"item.disabledTime\"\n                [formControlName]=\"item.key\"></nz-date-picker>\n              <nz-month-picker\n                *ngIf=\"item.type === 'month'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder\"></nz-month-picker>\n              <nz-year-picker\n                *ngIf=\"item.type === 'year'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder\"></nz-year-picker>\n              <nz-checkbox-group\n                *ngIf=\"item.type === 'checkbox'\"\n                [formControlName]=\"item.key\"></nz-checkbox-group>\n              <nz-select\n                *ngIf=\"item.type === 'select'\"\n                [nzAllowClear]=\"true\"\n                [formControlName]=\"item.key\">\n                <nz-option *ngFor=\"let item of item.options\" [nzValue]=\"item.value\" [nzLabel]=\"item.label\">\n                </nz-option>\n              </nz-select>\n              <nz-tree-select\n                *ngIf=\"item.type === 'tree-select'\"\n                [nzNodes]=\"item.options\"\n                nzShowSearch\n                nzCheckable\n                [formControlName]=\"item.key\">\n              </nz-tree-select>\n              <nz-cascader\n                *ngIf=\"item.type === 'cascader'\"\n                [nzOptions]=\"item.options\"\n                [nzValueProperty]=\"item.valueProperty || 'value'\"\n                [nzLabelProperty]=\"item.labelProperty || 'label'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder || '\u8BF7\u9009\u62E9'\"></nz-cascader>\n              <div *ngIf=\"item.children\" class=\"search-children\">\n                <div class=\"search-children-item\" *ngFor=\"let v of item.children\">\n                  <input\n                    *ngIf=\"v.type === 'input'\"\n                    type=\"text\"\n                    nz-input\n                    maxlength=\"30\"\n                    [formControlName]=\"v.key\" />\n                  <nz-input-number\n                    *ngIf=\"v.type === 'input-number'\"\n                    [formControlName]=\"v.key\"\n                    [nzPlaceHolder]=\"v.placeHolder\"\n                    [nzMin]=\"(v.options && v.options.min) || 1\"\n                    [nzMax]=\"(v.options && v.options.max) || 9999\"\n                    [nzStep]=\"(v.options && v.options.step) || 1\"\n                    [nzPrecision]=\"(v.options && v.options.precision) || 0.1\"></nz-input-number>\n                </div>\n              </div>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n    </form>\n    <div class=\"search-popover-btns\">\n      <button nz-button nzType=\"primary\" (click)=\"handleConfirm()\">\u641C\u7D22</button>\n      <button nz-button (click)=\"handleReset()\">\u6E05\u7A7A\u6761\u4EF6</button>\n      <button nz-button nzType=\"link\" (click)=\"handleCancle()\">\u6536\u8D77<i nz-icon nzType=\"up\" nzTheme=\"outline\"></i></button>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    HnSearchComponent.propDecorators = {
        formList: [{ type: Input }],
        keyword: [{ type: Input }],
        placeholder: [{ type: Input }],
        render: [{ type: Input }],
        search: [{ type: Output }]
    };
    return HnSearchComponent;
}());
export { HnSearchComponent };
if (false) {
    /** @type {?} */
    HnSearchComponent.prototype.formList;
    /** @type {?} */
    HnSearchComponent.prototype.keyword;
    /** @type {?} */
    HnSearchComponent.prototype.placeholder;
    /** @type {?} */
    HnSearchComponent.prototype.render;
    /** @type {?} */
    HnSearchComponent.prototype.search;
    /** @type {?} */
    HnSearchComponent.prototype.modeVisible;
    /** @type {?} */
    HnSearchComponent.prototype.form;
    /** @type {?} */
    HnSearchComponent.prototype.resetForm;
    /** @type {?} */
    HnSearchComponent.prototype.validateForm;
    /**
     * @type {?}
     * @private
     */
    HnSearchComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tc2VhcmNoL2huLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEU7SUEyQkUsMkJBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBbEIxQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFFMUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFJdkIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELGdCQUFXLEdBQVEsS0FBSyxDQUFDO1FBRXpCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFFZixjQUFTLEdBQVEsRUFBRSxDQUFDO0lBSWtCLENBQUM7Ozs7SUFFdkMsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0NBQVE7Ozs7SUFBUjs7WUFDUSxJQUFJLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxL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QUFFLElBQUksQ0FBQyxDQUFFLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTs7d0JBQ3RCLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSTtvQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBOUlGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMscWtLQUF5QztpQkFDMUM7Ozs7Z0JBVFEsV0FBVzs7OzJCQVdqQixLQUFLOzBCQUVMLEtBQUs7OEJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLE1BQU07O0lBOEhULHdCQUFDO0NBQUEsQUEvSUQsSUErSUM7U0F2SVksaUJBQWlCOzs7SUFDNUIscUNBQTRCOztJQUU1QixvQ0FBbUM7O0lBRW5DLHdDQUFpQzs7SUFFakMsbUNBQXFCOztJQUVyQixtQ0FBeUQ7O0lBRXpELHdDQUF5Qjs7SUFFekIsaUNBQWU7O0lBRWYsc0NBQW9COztJQUVwQix5Q0FBd0I7Ozs7O0lBRVosK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1zZWFyY2gnLFxuICBleHBvcnRBczogJ2huU2VhcmNoJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIblNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm1MaXN0OiBhbnkgPSBbXTtcblxuICBASW5wdXQoKSBrZXl3b3JkID0gJ3NlYXJjaENvbnRlbnQnO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeafpeivouadoeS7tic7XG5cbiAgQElucHV0KCkgcmVuZGVyOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9kZVZpc2libGU6IGFueSA9IGZhbHNlO1xuXG4gIGZvcm06IGFueSA9IHt9O1xuXG4gIHJlc2V0Rm9ybTogYW55ID0gW107XG5cbiAgdmFsaWRhdGVGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtW3RoaXMua2V5d29yZF0gPSBudWxsO1xuICAgIHRoaXMucmVzZXRGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm1MaXN0KSk7XG4gICAgdGhpcy5pbml0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluihqOWNlVxuICAgKi9cbiAgaW5pdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybTogYW55ID0gdGhpcy5zZXRJbml0Rm9ybSh0aGlzLmZvcm1MaXN0KTtcbiAgICB0aGlzLnZhbGlkYXRlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoeyAuLi5mb3JtIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWIneWni+WMluihqOWNleaVsOaNrlxuICAgKiBAcGFyYW0gYXJyIOaVsOaNrlxuICAgKi9cbiAgc2V0SW5pdEZvcm0oYXJyOiBhbnkpIHtcbiAgICBsZXQgZm9ybTogYW55ID0ge307XG4gICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBmb3JtID0geyAuLi5mb3JtLCAuLi50aGlzLnNldEluaXRGb3JtKGl0ZW0uY2hpbGRyZW4pIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgZm9ybVtpdGVtLmtleV0gPSBbT2JqZWN0LmFzc2lnbihbXSwgaXRlbS5vcHRpb25zKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybVtpdGVtLmtleV0gPSBbbnVsbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiDov4fmu6TmlbDnu4RcbiAgICogQHBhcmFtIGRhdGEg5YC877ya5pWw57uEXG4gICAqL1xuICBmaWx0ZXJBcnIoZGF0YTogYW55W10pIHtcbiAgICByZXR1cm4gZGF0YVxuICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2hlY2tlZDtcbiAgICAgIH0pXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIh+aNoumrmOe6p+aQnOe0olxuICAgKi9cbiAgaGFuZGxlVG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMubW9kZVZpc2libGUgPSAhdGhpcy5tb2RlVmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtojmk43kvZxcbiAgICovXG4gIGhhbmRsZUNhbmNsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6KGo5Y2VXG4gICAqL1xuICBoYW5kbGVSZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1MaXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShbLi4udGhpcy5yZXNldEZvcm1dKSk7XG4gICAgdGhpcy5pbml0Rm9ybSgpO1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoeyAuLi50aGlzLmZvcm0gfSk7XG4gIH1cblxuICAvKipcbiAgICog56Gu6K6k5pON5L2cXG4gICAqL1xuICBoYW5kbGVDb25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmUruebmGVudGVy5LqL5Lu2XG4gICAqL1xuICBoYW5kbGVLZXl1cEVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaPkOS6pOihqOWNlVxuICAgKi9cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsaWRhdGVGb3JtLnZhbHVlO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0geyAuLi50aGlzLmZvcm0sIC4uLnRoaXMuc2V0UGFyYW1zKHRoaXMuZm9ybUxpc3QsIHZhbHVlKSB9O1xuICAgIHRoaXMuc2VhcmNoLmVtaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5kYXRhXG4gICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxuICAgKi9cbiAgc2V0UGFyYW1zKGFycjogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4udGhpcy5zZXRQYXJhbXMoaXRlbS5jaGlsZHJlbiwgZGF0YSkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLmZpbHRlckFycihkYXRhW2l0ZW0ua2V5XSkuam9pbignLCcpIHx8IG51bGw7XG4gICAgICAgICAgcGFyYW1zW2l0ZW0ua2V5XSA9IHN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNbaXRlbS5rZXldID0gZGF0YVtpdGVtLmtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iXX0=