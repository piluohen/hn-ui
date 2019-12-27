/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/hn-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class HnSearchComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        this.form[this.keyword] = null;
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    }
    /**
     * 初始化表单
     * @return {?}
     */
    initForm() {
        /** @type {?} */
        const form = this.setInitForm(this.formList);
        this.validateForm = this.fb.group(Object.assign({}, form));
    }
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    setInitForm(arr) {
        /** @type {?} */
        let form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.children) {
                form = Object.assign({}, form, this.setInitForm(item.children));
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
    }
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    filterArr(data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.value;
        }));
    }
    /**
     * 切换高级搜索
     * @return {?}
     */
    handleToggle() {
        this.modeVisible = !this.modeVisible;
    }
    /**
     * 取消操作
     * @return {?}
     */
    handleCancle() {
        this.modeVisible = false;
    }
    /**
     * 重置表单
     * @return {?}
     */
    handleReset() {
        this.formList = JSON.parse(JSON.stringify([...this.resetForm]));
        this.initForm();
        this.search.emit(Object.assign({}, this.form));
    }
    /**
     * 确认操作
     * @return {?}
     */
    handleConfirm() {
        this.submitForm();
    }
    /**
     * 键盘enter事件
     * @return {?}
     */
    handleKeyupEnter() {
        this.submitForm();
    }
    /**
     * 提交表单
     * @return {?}
     */
    submitForm() {
        /** @type {?} */
        const value = this.validateForm.value;
        /** @type {?} */
        const params = Object.assign({}, this.form, this.setParams(this.formList, value));
        this.search.emit(params);
    }
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    setParams(arr, data) {
        /** @type {?} */
        let params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.children) {
                params = Object.assign({}, params, this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    const str = this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    }
}
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
HnSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
HnSearchComponent.propDecorators = {
    formList: [{ type: Input }],
    keyword: [{ type: Input }],
    placeholder: [{ type: Input }],
    render: [{ type: Input }],
    search: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tc2VhcmNoL2huLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBeUIsTUFBTSxnQkFBZ0IsQ0FBQztBQVVwRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBbUI1QixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWxCMUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVuQixZQUFPLEdBQUcsZUFBZSxDQUFDO1FBRTFCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBSXZCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RCxnQkFBVyxHQUFRLEtBQUssQ0FBQztRQUV6QixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBRWYsY0FBUyxHQUFRLEVBQUUsQ0FBQztJQUlrQixDQUFDOzs7O0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsUUFBUTs7Y0FDQSxJQUFJLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLG1CQUFN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STtvQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBOUlGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMscWtLQUF5QzthQUMxQzs7OztZQVRRLFdBQVc7Ozt1QkFXakIsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFFTCxNQUFNOzs7O0lBUlAscUNBQTRCOztJQUU1QixvQ0FBbUM7O0lBRW5DLHdDQUFpQzs7SUFFakMsbUNBQXFCOztJQUVyQixtQ0FBeUQ7O0lBRXpELHdDQUF5Qjs7SUFFekIsaUNBQWU7O0lBRWYsc0NBQW9COztJQUVwQix5Q0FBd0I7Ozs7O0lBRVosK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1zZWFyY2gnLFxuICBleHBvcnRBczogJ2huU2VhcmNoJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIblNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm1MaXN0OiBhbnkgPSBbXTtcblxuICBASW5wdXQoKSBrZXl3b3JkID0gJ3NlYXJjaENvbnRlbnQnO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeafpeivouadoeS7tic7XG5cbiAgQElucHV0KCkgcmVuZGVyOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9kZVZpc2libGU6IGFueSA9IGZhbHNlO1xuXG4gIGZvcm06IGFueSA9IHt9O1xuXG4gIHJlc2V0Rm9ybTogYW55ID0gW107XG5cbiAgdmFsaWRhdGVGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtW3RoaXMua2V5d29yZF0gPSBudWxsO1xuICAgIHRoaXMucmVzZXRGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm1MaXN0KSk7XG4gICAgdGhpcy5pbml0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluihqOWNlVxuICAgKi9cbiAgaW5pdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybTogYW55ID0gdGhpcy5zZXRJbml0Rm9ybSh0aGlzLmZvcm1MaXN0KTtcbiAgICB0aGlzLnZhbGlkYXRlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoeyAuLi5mb3JtIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWIneWni+WMluihqOWNleaVsOaNrlxuICAgKiBAcGFyYW0gYXJyIOaVsOaNrlxuICAgKi9cbiAgc2V0SW5pdEZvcm0oYXJyOiBhbnkpIHtcbiAgICBsZXQgZm9ybTogYW55ID0ge307XG4gICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBmb3JtID0geyAuLi5mb3JtLCAuLi50aGlzLnNldEluaXRGb3JtKGl0ZW0uY2hpbGRyZW4pIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgZm9ybVtpdGVtLmtleV0gPSBbT2JqZWN0LmFzc2lnbihbXSwgaXRlbS5vcHRpb25zKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybVtpdGVtLmtleV0gPSBbbnVsbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiDov4fmu6TmlbDnu4RcbiAgICogQHBhcmFtIGRhdGEg5YC877ya5pWw57uEXG4gICAqL1xuICBmaWx0ZXJBcnIoZGF0YTogYW55W10pIHtcbiAgICByZXR1cm4gZGF0YVxuICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2hlY2tlZDtcbiAgICAgIH0pXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIh+aNoumrmOe6p+aQnOe0olxuICAgKi9cbiAgaGFuZGxlVG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMubW9kZVZpc2libGUgPSAhdGhpcy5tb2RlVmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtojmk43kvZxcbiAgICovXG4gIGhhbmRsZUNhbmNsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u6KGo5Y2VXG4gICAqL1xuICBoYW5kbGVSZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1MaXN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShbLi4udGhpcy5yZXNldEZvcm1dKSk7XG4gICAgdGhpcy5pbml0Rm9ybSgpO1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoeyAuLi50aGlzLmZvcm0gfSk7XG4gIH1cblxuICAvKipcbiAgICog56Gu6K6k5pON5L2cXG4gICAqL1xuICBoYW5kbGVDb25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmUruebmGVudGVy5LqL5Lu2XG4gICAqL1xuICBoYW5kbGVLZXl1cEVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaPkOS6pOihqOWNlVxuICAgKi9cbiAgc3VibWl0Rm9ybSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsaWRhdGVGb3JtLnZhbHVlO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0geyAuLi50aGlzLmZvcm0sIC4uLnRoaXMuc2V0UGFyYW1zKHRoaXMuZm9ybUxpc3QsIHZhbHVlKSB9O1xuICAgIHRoaXMuc2VhcmNoLmVtaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5kYXRhXG4gICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxuICAgKi9cbiAgc2V0UGFyYW1zKGFycjogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4udGhpcy5zZXRQYXJhbXMoaXRlbS5jaGlsZHJlbiwgZGF0YSkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLmZpbHRlckFycihkYXRhW2l0ZW0ua2V5XSkuam9pbignLCcpIHx8IG51bGw7XG4gICAgICAgICAgcGFyYW1zW2l0ZW0ua2V5XSA9IHN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNbaXRlbS5rZXldID0gZGF0YVtpdGVtLmtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iXX0=