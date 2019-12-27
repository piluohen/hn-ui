/**
 * @fileoverview added by tsickle
 * Generated from: hn-checkbox-group/hn-checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core';
var HnCheckboxGroupComponent = /** @class */ (function () {
    function HnCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.options = [];
        this.disabled = false;
        this.checkAll = false;
        this.checkAllLabel = '全选';
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        /**
         * change方法
         */
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        /**
         * touch方法
         */
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /**
     * 索引
     * @param _index 索引值
     * @param option 子项
     */
    /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.trackByOption = /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * 写入value方法
     * @param value 值
     */
    /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.writeValue = /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    function (value) {
        if (!value) {
            return;
        }
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = value.includes(item.value);
        }));
        this.changeAllCheked(value);
        this.data = value;
        this.cdr.markForCheck();
    };
    /**
     * 注册change方法
     * @param fn change方法
     */
    /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.registerOnChange = /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * 注册touch事件
     * @param fn touch方法
     */
    /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.registerOnTouched = /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * 设置禁用状态
     * @param isDisabled 是否禁用
     */
    /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.setDisabledState = /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * checkbox选中值改变操作
     */
    /**
     * checkbox选中值改变操作
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.handleChange = /**
     * checkbox选中值改变操作
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.filterData(this.options);
        this.changeAllCheked(data);
        this.onChange(data);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.handleAllChecked = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item.disabled) {
                item.checked = type;
            }
        }));
        /** @type {?} */
        var data = this.filterData(this.options);
        this.onChange(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.changeAllCheked = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var arr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return !item.disabled || (item.disabled && item.checked);
        }));
        if (data.length === arr.length) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else if (data.length === 0) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.filterData = /**
     * @param {?} data
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
    HnCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-checkbox-group',
                    template: "<label\n  *ngIf=\"checkAll\"\n  nz-checkbox\n  [(nzChecked)]=\"allChecked\"\n  (nzCheckedChange)=\"handleAllChecked($event)\"\n  [nzIndeterminate]=\"indeterminate\">\n  {{checkAllLabel}}\n</label>\n\n<label nz-checkbox\n  class=\"ant-checkbox-group-item\"\n  *ngFor=\"let option of options; trackBy:trackByOption\"\n  [nzDisabled]=\"option.disabled || disabled\"\n  [(nzChecked)]=\"option.checked\"\n  (nzCheckedChange)=\"handleChange()\">\n  <span>{{ option.label }}</span>\n</label>\n",
                    exportAs: 'hnCheckboxGroup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return HnCheckboxGroupComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    HnCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    HnCheckboxGroupComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        checkAll: [{ type: Input }],
        checkAllLabel: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], HnCheckboxGroupComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], HnCheckboxGroupComponent.prototype, "checkAll", void 0);
    return HnCheckboxGroupComponent;
}());
export { HnCheckboxGroupComponent };
if (false) {
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.disabled;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.checkAll;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.checkAllLabel;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.data;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.allChecked;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.indeterminate;
    /**
     * change方法
     * @type {?}
     */
    HnCheckboxGroupComponent.prototype.onChange;
    /**
     * touch方法
     * @type {?}
     */
    HnCheckboxGroupComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1jaGVja2JveC1ncm91cC9obi1jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQ7SUE4QkUsa0NBQ1UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsR0FBc0IsRUFDOUIsUUFBbUI7UUFIWCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakJ2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBRUosYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTlCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixrQkFBYSxHQUFHLEtBQUssQ0FBQzs7OztRQTBCdEIsYUFBUTs7O1FBQXlCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDOzs7O1FBSzVDLGNBQVM7OztRQUFjLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBdkJoQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JB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OztnQkExQkMsVUFBVTtnQkFMSCxZQUFZO2dCQUduQixpQkFBaUI7Z0JBTWpCLFNBQVM7OzswQkF3QlIsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7Z0NBRUwsS0FBSzs7SUFKbUI7UUFBZixZQUFZLEVBQUU7OzhEQUFrQjtJQUVqQjtRQUFmLFlBQVksRUFBRTs7OERBQWtCO0lBdUk1QywrQkFBQztDQUFBLEFBM0pELElBMkpDO1NBNUlZLHdCQUF3Qjs7O0lBQ25DLDJDQUE2Qjs7SUFFN0IsNENBQTBDOztJQUUxQyw0Q0FBMEM7O0lBRTFDLGlEQUE4Qjs7SUFFOUIsd0NBQWlCOztJQUVqQiw4Q0FBbUI7O0lBRW5CLGlEQUFzQjs7Ozs7SUEwQnRCLDRDQUE0Qzs7Ozs7SUFLNUMsNkNBQWtDOzs7OztJQTVCaEMsOENBQThCOzs7OztJQUM5QixnREFBa0M7Ozs7O0lBQ2xDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLWNoZWNrYm94LWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2huLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdobkNoZWNrYm94R3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSG5DaGVja2JveEdyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhuQ2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrQWxsID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY2hlY2tBbGxMYWJlbCA9ICflhajpgIknO1xuXG4gIGRhdGE6IGFueVtdID0gW107XG5cbiAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2hlY2tib3gtZ3JvdXAnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2Xmlrnms5VcbiAgICovXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgLyoqXG4gICAqIHRvdWNo5pa55rOVXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IG51bGw7XG5cbiAgLyoqXG4gICAqIOe0ouW8lVxuICAgKiBAcGFyYW0gX2luZGV4IOe0ouW8leWAvFxuICAgKiBAcGFyYW0gb3B0aW9uIOWtkOmhuVxuICAgKi9cbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog5YaZ5YWldmFsdWXmlrnms5VcbiAgICogQHBhcmFtIHZhbHVlIOWAvFxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHZhbHVlLmluY2x1ZGVzKGl0ZW0udmFsdWUpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hhbmdlQWxsQ2hla2VkKHZhbHVlKTtcbiAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhoxjaGFuZ2Xmlrnms5VcbiAgICogQHBhcmFtIGZuIGNoYW5nZeaWueazlVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueVtdKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhox0b3VjaOS6i+S7tlxuICAgKiBAcGFyYW0gZm4gdG91Y2jmlrnms5VcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICog6K6+572u56aB55So54q25oCBXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2tib3jpgInkuK3lgLzmlLnlj5jmk43kvZxcbiAgICovXG4gIGhhbmRsZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5maWx0ZXJEYXRhKHRoaXMub3B0aW9ucyk7XG5cbiAgICB0aGlzLmNoYW5nZUFsbENoZWtlZChkYXRhKTtcbiAgICB0aGlzLm9uQ2hhbmdlKGRhdGEpO1xuICB9XG5cbiAgaGFuZGxlQWxsQ2hlY2tlZCh0eXBlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZpbHRlckRhdGEodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm9uQ2hhbmdlKGRhdGEpO1xuICB9XG5cbiAgY2hhbmdlQWxsQ2hla2VkKGRhdGE6IGFueVtdKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5vcHRpb25zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiAhaXRlbS5kaXNhYmxlZCB8fCAoaXRlbS5kaXNhYmxlZCAmJiBpdGVtLmNoZWNrZWQpO1xuICAgIH0pO1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gYXJyLmxlbmd0aCkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHJldHVybiBkYXRhXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jaGVja2VkO1xuICAgICAgfSlcbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==