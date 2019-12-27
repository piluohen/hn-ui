/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/hn-detail-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnDetailListComponent = /** @class */ (function () {
    function HnDetailListComponent() {
        this.detailList = [];
        this.change = new EventEmitter();
    }
    Object.defineProperty(HnDetailListComponent.prototype, "list", {
        get: /**
         * @return {?}
         */
        function () {
            return this.detailList;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this.detailList = val;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.change.emit(val);
            }), 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HnDetailListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
    HnDetailListComponent.ctorParameters = function () { return []; };
    HnDetailListComponent.propDecorators = {
        list: [{ type: Input }],
        change: [{ type: Output }]
    };
    return HnDetailListComponent;
}());
export { HnDetailListComponent };
if (false) {
    /** @type {?} */
    HnDetailListComponent.prototype.detailList;
    /** @type {?} */
    HnDetailListComponent.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tZGV0YWlsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1kZXRhaWwtbGlzdC9obi1kZXRhaWwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUEwQkU7UUFqQkEsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQWV2QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFaEMsQ0FBQztJQWZoQixzQkFDSSx1Q0FBSTs7OztRQU9SO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBVkQsVUFDUyxHQUFRO1lBRGpCLGlCQU1DO1lBSkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQzs7O09BQUE7Ozs7SUFXRCx3Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE1QmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG1nQkFBOEM7b0JBQzlDLFFBQVEsRUFBRSxjQUFjO29CQUN4QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7Ozt1QkFJRSxLQUFLO3lCQVlMLE1BQU07O0lBTVQsNEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXJCWSxxQkFBcUI7OztJQUNoQywyQ0FBdUI7O0lBY3ZCLHVDQUMrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLWRldGFpbC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2huLWRldGFpbC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdobkRldGFpbExpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSG5EZXRhaWxMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGV0YWlsTGlzdDogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgbGlzdCh2YWw6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsTGlzdCA9IHZhbDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGdldCBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmRldGFpbExpc3Q7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19