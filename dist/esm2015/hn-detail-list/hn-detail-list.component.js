/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/hn-detail-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnDetailListComponent {
    constructor() {
        this.detailList = [];
        this.change = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set list(val) {
        this.detailList = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.change.emit(val);
        }), 0);
    }
    /**
     * @return {?}
     */
    get list() {
        return this.detailList;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
HnDetailListComponent.decorators = [
    { type: Component, args: [{
                selector: 'hn-detail-list',
                template: "<div class=\"hn-detail-list\">\n  <nz-col *ngFor=\"let item of list; index as index\" [nzSpan]=\"item.col || 8\" class=\"hn-detail-item\">\n    <div class=\"hn-detail-label\">{{item.label}}\uFF1A</div>\n    <div class=\"hn-detail-value\">\n      <ng-template [ngIf]=\"item.render\" [ngTemplateOutlet]=\"item.render\"\n        [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\">\n      </ng-template>\n      <span *ngIf=\"!item.render\">{{item.value}}</span>\n    </div>\n  </nz-col>\n</div>",
                exportAs: 'hnDetailList',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
HnDetailListComponent.ctorParameters = () => [];
HnDetailListComponent.propDecorators = {
    list: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HnDetailListComponent.prototype.detailList;
    /** @type {?} */
    HnDetailListComponent.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tZGV0YWlsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1kZXRhaWwtbGlzdC9obi1kZXRhaWwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLHFCQUFxQjtJQWtCaEM7UUFqQkEsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQWV2QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFaEMsQ0FBQzs7Ozs7SUFmaEIsSUFDSSxJQUFJLENBQUMsR0FBUTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQU9ELFFBQVEsS0FBSSxDQUFDOzs7WUE1QmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1nQkFBOEM7Z0JBQzlDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7O21CQUlFLEtBQUs7cUJBWUwsTUFBTTs7OztJQWRQLDJDQUF1Qjs7SUFjdkIsdUNBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tZGV0YWlsLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tZGV0YWlsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBleHBvcnRBczogJ2huRGV0YWlsTGlzdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBIbkRldGFpbExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkZXRhaWxMaXN0OiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsaXN0KHZhbDogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxMaXN0ID0gdmFsO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWwpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2V0IGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGV0YWlsTGlzdDtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=