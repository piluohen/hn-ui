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
export class HnCheckboxGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(elementRef, focusMonitor, cdr, renderer) {
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
        () => null);
        /**
         * touch方法
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    trackByOption(_index, option) {
        return option.value;
    }
    /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            return;
        }
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.checked = value.includes(item.value);
        }));
        this.changeAllCheked(value);
        this.data = value;
        this.cdr.markForCheck();
    }
    /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * checkbox选中值改变操作
     * @return {?}
     */
    handleChange() {
        /** @type {?} */
        const data = this.filterData(this.options);
        this.changeAllCheked(data);
        this.onChange(data);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    handleAllChecked(type) {
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!item.disabled) {
                item.checked = type;
            }
        }));
        /** @type {?} */
        const data = this.filterData(this.options);
        this.onChange(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    changeAllCheked(data) {
        /** @type {?} */
        const arr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    filterData(data) {
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
}
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
                        () => HnCheckboxGroupComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
HnCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1jaGVja2JveC1ncm91cC9obi1jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFpQmxELE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFlbkMsWUFDVSxVQUFzQixFQUN0QixZQUEwQixFQUMxQixHQUFzQixFQUM5QixRQUFtQjtRQUhYLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQnZCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFSixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFOUIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGtCQUFhLEdBQUcsS0FBSyxDQUFDOzs7O1FBMEJ0QixhQUFROzs7UUFBeUIsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDOzs7O1FBSzVDLGNBQVM7OztRQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQXZCaEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMs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Q0FBNkI7O0lBRTdCLDRDQUEwQzs7SUFFMUMsNENBQTBDOztJQUUxQyxpREFBOEI7O0lBRTlCLHdDQUFpQjs7SUFFakIsOENBQW1COztJQUVuQixpREFBc0I7Ozs7O0lBMEJ0Qiw0Q0FBNEM7Ozs7O0lBSzVDLDZDQUFrQzs7Ozs7SUE1QmhDLDhDQUE4Qjs7Ozs7SUFDOUIsZ0RBQWtDOzs7OztJQUNsQyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1jaGVja2JveC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnaG5DaGVja2JveEdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEhuQ2hlY2tib3hHcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIbkNoZWNrYm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja0FsbCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNoZWNrQWxsTGFiZWwgPSAn5YWo6YCJJztcblxuICBkYXRhOiBhbnlbXSA9IFtdO1xuXG4gIGFsbENoZWNrZWQgPSBmYWxzZTtcblxuICBpbmRldGVybWluYXRlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdl5pa55rOVXG4gICAqL1xuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIC8qKlxuICAgKiB0b3VjaOaWueazlVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiBudWxsO1xuXG4gIC8qKlxuICAgKiDntKLlvJVcbiAgICogQHBhcmFtIF9pbmRleCDntKLlvJXlgLxcbiAgICogQHBhcmFtIG9wdGlvbiDlrZDpoblcbiAgICovXG4gIHRyYWNrQnlPcHRpb24oX2luZGV4OiBudW1iZXIsIG9wdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOWGmeWFpXZhbHVl5pa55rOVXG4gICAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSB2YWx1ZS5pbmNsdWRlcyhpdGVtLnZhbHVlKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZUFsbENoZWtlZCh2YWx1ZSk7XG4gICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICog5rOo5YaMY2hhbmdl5pa55rOVXG4gICAqIEBwYXJhbSBmbiBjaGFuZ2Xmlrnms5VcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnlbXSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICog5rOo5YaMdG91Y2jkuovku7ZcbiAgICogQHBhcmFtIGZuIHRvdWNo5pa55rOVXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruemgeeUqOeKtuaAgVxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCDmmK/lkKbnpoHnlKhcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrYm946YCJ5Lit5YC85pS55Y+Y5pON5L2cXG4gICAqL1xuICBoYW5kbGVDaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZmlsdGVyRGF0YSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy5jaGFuZ2VBbGxDaGVrZWQoZGF0YSk7XG4gICAgdGhpcy5vbkNoYW5nZShkYXRhKTtcbiAgfVxuXG4gIGhhbmRsZUFsbENoZWNrZWQodHlwZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5maWx0ZXJEYXRhKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5vbkNoYW5nZShkYXRhKTtcbiAgfVxuXG4gIGNoYW5nZUFsbENoZWtlZChkYXRhOiBhbnlbXSk6IHZvaWQge1xuICAgIGNvbnN0IGFyciA9IHRoaXMub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gIWl0ZW0uZGlzYWJsZWQgfHwgKGl0ZW0uZGlzYWJsZWQgJiYgaXRlbS5jaGVja2VkKTtcbiAgICB9KTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IGFyci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGEoZGF0YTogYW55W10pIHtcbiAgICByZXR1cm4gZGF0YVxuICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2hlY2tlZDtcbiAgICAgIH0pXG4gICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=