/**
 * @fileoverview added by tsickle
 * Generated from: hn-img-list/hn-img-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnImgListComponent = /** @class */ (function () {
    function HnImgListComponent() {
        this.visible = false;
        this.showIndex = 0;
        this.list = [];
    }
    /**
     * @return {?}
     */
    HnImgListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    HnImgListComponent.prototype.handleClick = /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    function (val, index) {
        this.visible = true;
        this.showIndex = index;
    };
    HnImgListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-img-list',
                    exportAs: 'hnImgList',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-img-list\">\n  <div class=\"hn-img-list-item\" *ngFor=\"let item of list; index as i\" (click)=\"handleClick(item, i)\">\n    <img [src]=\"item.url\">\n  </div>\n</div>\n\n<hn-preview [(visible)]=\"visible\" [list]=\"list\" [index]=\"showIndex\"></hn-preview>"
                }] }
    ];
    /** @nocollapse */
    HnImgListComponent.ctorParameters = function () { return []; };
    HnImgListComponent.propDecorators = {
        list: [{ type: Input }]
    };
    return HnImgListComponent;
}());
export { HnImgListComponent };
if (false) {
    /** @type {?} */
    HnImgListComponent.prototype.visible;
    /** @type {?} */
    HnImgListComponent.prototype.showIndex;
    /** @type {?} */
    HnImgListComponent.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4taW1nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1pbWctbGlzdC9obi1pbWctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBZSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSDtJQWVFO1FBTkEsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRWIsU0FBSSxHQUFVLEVBQUUsQ0FBQztJQUVYLENBQUM7Ozs7SUFFaEIscUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Ozs7O0lBRWIsd0NBQVc7Ozs7O0lBQVgsVUFBWSxHQUFHLEVBQUUsS0FBSztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsV0FBVztvQkFDckIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQywrUkFBMkM7aUJBQzVDOzs7Ozt1QkFNRSxLQUFLOztJQVVSLHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FmWSxrQkFBa0I7OztJQUM3QixxQ0FBeUI7O0lBRXpCLHVDQUFzQjs7SUFFdEIsa0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLWltZy1saXN0JyxcbiAgZXhwb3J0QXM6ICdobkltZ0xpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1pbWctbGlzdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG5JbWdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdmlzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIHNob3dJbmRleDogTnVtYmVyID0gMDtcblxuICBASW5wdXQoKSBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgaGFuZGxlQ2xpY2sodmFsLCBpbmRleCk6IHZvaWQge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5zaG93SW5kZXggPSBpbmRleDtcbiAgfVxufVxuIl19