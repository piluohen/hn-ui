/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnTableMsgComponent = /** @class */ (function () {
    function HnTableMsgComponent() {
        this.clear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    HnTableMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HnTableMsgComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.clear.emit();
    };
    HnTableMsgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-table-msg',
                    exportAs: 'hnTableMsg',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-table-msg\" *ngIf=\"check > 0\">\n  <div class=\"msg-icon\">\n    <i nz-icon nzType=\"info\" nzTheme=\"outline\"></i>\n  </div>\n  <div class=\"msg-check\">\n    <span>\u5DF2\u9009\u62E9</span>\n    <span class=\"font-blue\"> {{check}} </span>\n    <span>\u9879</span>\n  </div>\n  <!-- <div class=\"msg-total\">\n    <span>\u603B\u8BA1\uFF1A</span>\n    <span class=\"value\">{{total}}\u6761</span>\n  </div> -->\n  <div class=\"msg-clear font-blue\" (click)=\"handleClear()\">\u6E05\u7A7A</div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnTableMsgComponent.ctorParameters = function () { return []; };
    HnTableMsgComponent.propDecorators = {
        check: [{ type: Input }],
        total: [{ type: Input }],
        clear: [{ type: Output }]
    };
    return HnTableMsgComponent;
}());
export { HnTableMsgComponent };
if (false) {
    /** @type {?} */
    HnTableMsgComponent.prototype.check;
    /** @type {?} */
    HnTableMsgComponent.prototype.total;
    /** @type {?} */
    HnTableMsgComponent.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tdGFibGUtbXNnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tdGFibGUtbXNnL2huLXRhYmxlLW1zZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFhRTtRQUZVLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6QyxDQUFDOzs7O0lBRWhCLHNDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYix5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG9oQkFBNEM7aUJBQzdDOzs7Ozt3QkFFRSxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsTUFBTTs7SUFTVCwwQkFBQztDQUFBLEFBcEJELElBb0JDO1NBWlksbUJBQW1COzs7SUFDOUIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLG9DQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tdGFibGUtbXNnJyxcbiAgZXhwb3J0QXM6ICdoblRhYmxlTXNnJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tdGFibGUtbXNnLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIblRhYmxlTXNnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hlY2s6IG51bWJlcjtcbiAgQElucHV0KCkgdG90YWw6IG51bWJlcjtcbiAgQE91dHB1dCgpIGNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGhhbmRsZUNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXIuZW1pdCgpO1xuICB9XG59XG4iXX0=