/**
 * @fileoverview added by tsickle
 * Generated from: hn-list/hn-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnListComponent {
    constructor() {
        this.list = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
HnListComponent.decorators = [
    { type: Component, args: [{
                selector: 'hn-list',
                exportAs: 'hnList',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<div *ngIf=\"list.length > 0; else empty\" class=\"hn-list\">\n  <div class=\"hn-list-item\" *ngFor=\"let item of list\">\n    <div class=\"hn-list-title\">\n      <i *ngIf=\"icon\" nz-icon [iconfont]=\"icon\"></i>\n      <div class=\"title\">{{item.title}}</div>\n    </div>\n    <div class=\"hn-list-desc\">{{item.desc}}</div>\n  </div>\n</div>\n<ng-template #empty>\n  <div class=\"hn-empty\">\n    <nz-empty></nz-empty>\n  </div>\n</ng-template>"
            }] }
];
/** @nocollapse */
HnListComponent.ctorParameters = () => [];
HnListComponent.propDecorators = {
    icon: [{ type: Input }],
    list: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HnListComponent.prototype.icon;
    /** @type {?} */
    HnListComponent.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLWxpc3QvaG4tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVyRyxNQUFNLE9BQU8sZUFBZTtJQUkxQjtRQUZTLFNBQUksR0FBVSxFQUFFLENBQUM7SUFFWCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFkZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLDZjQUF1QzthQUN4Qzs7Ozs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sK0JBQXNCOztJQUN0QiwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1saXN0JyxcbiAgZXhwb3J0QXM6ICdobkxpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1saXN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpc3Q6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==