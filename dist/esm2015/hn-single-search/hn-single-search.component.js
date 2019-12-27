/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/hn-single-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class HnSingleSearchComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    }
    /**
     * 初始化表单
     * @return {?}
     */
    initForm() {
        this.form = this.setInitForm(this.formList);
    }
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    setInitForm(arr) {
        /** @type {?} */
        const form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.type === 'checkbox') {
                form[item.key] = [...Object.assign([], item.options)];
                form[item.checkAll] = false;
                form[item.indeterminate] = false;
            }
            else {
                form[item.key] = item.value || null;
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
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    handlePickerChange($event, item) {
        this.submitForm();
    }
    /**
     * Input 改变
     * @return {?}
     */
    handleKeyupEnter() {
        this.submitForm();
    }
    /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    handleCheckboxChange($event, data) {
        this.setCheckbox(data);
        this.submitForm();
    }
    /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    updateAllChecked($event, data) {
        data.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            item.checked = $event;
        }));
        if (data.checkAll) {
            this.form[data.checkAll] = $event;
        }
        this.submitForm();
    }
    /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    setCheckbox(data) {
        if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked))) {
            this.form[data.checkAll] = true;
            this.form[data.indeterminate] = false;
        }
        else if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.checked))) {
            this.form[data.checkAll] = false;
            this.form[data.indeterminate] = false;
        }
        else {
            this.form[data.indeterminate] = true;
        }
    }
    /**
     * 提交表单
     * @return {?}
     */
    submitForm() {
        /** @type {?} */
        const value = this.form;
        /** @type {?} */
        const params = Object.assign({}, this.setParams(this.formList, value));
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
HnSingleSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
HnSingleSearchComponent.propDecorators = {
    formList: [{ type: Input }],
    render: [{ type: Input }],
    style: [{ type: Input }],
    search: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2luZ2xlLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLXNpbmdsZS1zZWFyY2gvaG4tc2luZ2xlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBeUIsTUFBTSxnQkFBZ0IsQ0FBQztBQVVwRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBb0JsQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQW5CMUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUluQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWYsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELGdCQUFXLEdBQVEsS0FBSyxDQUFDO1FBRXpCLFNBQUksR0FBUSxFQUFFLENBQUM7UUFFZixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBRXBCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFJZ0IsQ0FBQzs7OztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBTUQsV0FBVyxDQUFDLEdBQVU7O2NBQ2QsSUFBSSxHQUFRLEVBQUU7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QUFXOzs7dUJBV2pCLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO3FCQUVMLE1BQU07Ozs7SUFOUCwyQ0FBNEI7O0lBRTVCLHlDQUFxQjs7SUFFckIsd0NBQXlCOztJQUV6Qix5Q0FBeUQ7O0lBRXpELDhDQUF5Qjs7SUFFekIsdUNBQWU7O0lBRWYsNENBQW9COztJQUVwQiw2Q0FBbUI7O0lBQ25CLGdEQUFzQjs7SUFFdEIsK0NBQXdCOzs7OztJQUVaLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tc2luZ2xlLXNlYXJjaCcsXG4gIGV4cG9ydEFzOiAnaG5TaW5nbGVTZWFyY2gnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1zaW5nbGUtc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIblNpbmdsZVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm1MaXN0OiBhbnkgPSBbXTtcblxuICBASW5wdXQoKSByZW5kZXI6IGFueTtcblxuICBASW5wdXQoKSBzdHlsZTogYW55ID0ge307XG5cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9kZVZpc2libGU6IGFueSA9IGZhbHNlO1xuXG4gIGZvcm06IGFueSA9IHt9O1xuXG4gIHJlc2V0Rm9ybTogYW55ID0gW107XG5cbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlID0gZmFsc2U7XG5cbiAgdmFsaWRhdGVGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXNldEZvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybUxpc3QpKTtcbiAgICB0aGlzLmluaXRGb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyW6KGo5Y2VXG4gICAqL1xuICBpbml0Rm9ybSgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnNldEluaXRGb3JtKHRoaXMuZm9ybUxpc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWIneWni+WMluihqOWNleaVsOaNrlxuICAgKiBAcGFyYW0gYXJyIOaVsOaNrlxuICAgKi9cbiAgc2V0SW5pdEZvcm0oYXJyOiBhbnlbXSkge1xuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xuICAgIGFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBmb3JtW2l0ZW0ua2V5XSA9IFsuLi5PYmplY3QuYXNzaWduKFtdLCBpdGVtLm9wdGlvbnMpXTtcbiAgICAgICAgZm9ybVtpdGVtLmNoZWNrQWxsXSA9IGZhbHNlO1xuICAgICAgICBmb3JtW2l0ZW0uaW5kZXRlcm1pbmF0ZV0gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1baXRlbS5rZXldID0gaXRlbS52YWx1ZSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/h+a7pOaVsOe7hFxuICAgKiBAcGFyYW0gZGF0YSDlgLzvvJrmlbDnu4RcbiAgICovXG4gIGZpbHRlckFycihkYXRhOiBhbnlbXSkge1xuICAgIHJldHVybiBkYXRhXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jaGVja2VkO1xuICAgICAgfSlcbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGlja2Vy5pS55Y+YXG4gICAqL1xuICBoYW5kbGVQaWNrZXJDaGFuZ2UoJGV2ZW50OiBhbnksIGl0ZW06IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0IOaUueWPmFxuICAgKi9cbiAgaGFuZGxlS2V5dXBFbnRlcigpIHtcbiAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVja2JveOaUueWPmFxuICAgKi9cbiAgaGFuZGxlQ2hlY2tib3hDaGFuZ2UoJGV2ZW50OiBhbnksIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2hlY2tib3goZGF0YSk7XG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICog5YWo6YCJ5pON5L2cXG4gICAqIEBwYXJhbSAkZXZlbnQg5YC8XG4gICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxuICAgKi9cbiAgdXBkYXRlQWxsQ2hlY2tlZCgkZXZlbnQ6IGFueSwgZGF0YTogYW55KSB7XG4gICAgZGF0YS5vcHRpb25zLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gJGV2ZW50O1xuICAgIH0pO1xuICAgIGlmIChkYXRhLmNoZWNrQWxsKSB7XG4gICAgICB0aGlzLmZvcm1bZGF0YS5jaGVja0FsbF0gPSAkZXZlbnQ7XG4gICAgfVxuICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rmNoZWNrYm945YC8XG4gICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxuICAgKi9cbiAgc2V0Q2hlY2tib3goZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEub3B0aW9ucy5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCkpIHtcbiAgICAgIHRoaXMuZm9ybVtkYXRhLmNoZWNrQWxsXSA9IHRydWU7XG4gICAgICB0aGlzLmZvcm1bZGF0YS5pbmRldGVybWluYXRlXSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5vcHRpb25zLmV2ZXJ5KGl0ZW0gPT4gIWl0ZW0uY2hlY2tlZCkpIHtcbiAgICAgIHRoaXMuZm9ybVtkYXRhLmNoZWNrQWxsXSA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JtW2RhdGEuaW5kZXRlcm1pbmF0ZV0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtW2RhdGEuaW5kZXRlcm1pbmF0ZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmj5DkuqTooajljZVcbiAgICovXG4gIHN1Ym1pdEZvcm0oKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm07XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7IC4uLnRoaXMuc2V0UGFyYW1zKHRoaXMuZm9ybUxpc3QsIHZhbHVlKSB9O1xuICAgIHRoaXMuc2VhcmNoLmVtaXQocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva5kYXRhXG4gICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxuICAgKi9cbiAgc2V0UGFyYW1zKGFycjogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4udGhpcy5zZXRQYXJhbXMoaXRlbS5jaGlsZHJlbiwgZGF0YSkgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLmZpbHRlckFycihkYXRhW2l0ZW0ua2V5XSkuam9pbignLCcpIHx8IG51bGw7XG4gICAgICAgICAgcGFyYW1zW2l0ZW0ua2V5XSA9IHN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNbaXRlbS5rZXldID0gZGF0YVtpdGVtLmtleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iXX0=