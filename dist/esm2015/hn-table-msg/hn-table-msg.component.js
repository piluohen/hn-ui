/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnTableMsgComponent {
    constructor() {
        this.clear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    handleClear() {
        this.clear.emit();
    }
}
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
HnTableMsgComponent.ctorParameters = () => [];
HnTableMsgComponent.propDecorators = {
    check: [{ type: Input }],
    total: [{ type: Input }],
    clear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HnTableMsgComponent.prototype.check;
    /** @type {?} */
    HnTableMsgComponent.prototype.total;
    /** @type {?} */
    HnTableMsgComponent.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tdGFibGUtbXNnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tdGFibGUtbXNnL2huLXRhYmxlLW1zZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUZVLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6QyxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsb2hCQUE0QzthQUM3Qzs7Ozs7b0JBRUUsS0FBSztvQkFDTCxLQUFLO29CQUNMLE1BQU07Ozs7SUFGUCxvQ0FBdUI7O0lBQ3ZCLG9DQUF1Qjs7SUFDdkIsb0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi10YWJsZS1tc2cnLFxuICBleHBvcnRBczogJ2huVGFibGVNc2cnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi10YWJsZS1tc2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhuVGFibGVNc2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGVjazogbnVtYmVyO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuICBAT3V0cHV0KCkgY2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgaGFuZGxlQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==