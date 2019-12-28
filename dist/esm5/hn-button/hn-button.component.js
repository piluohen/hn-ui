/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnButtonComponent = /** @class */ (function () {
    function HnButtonComponent() {
        this.type = 'default';
        this.ghost = false;
        this.loading = false;
        this.shape = '';
        this.size = 'default';
        this.block = false;
        this.icon = '';
        this.disabled = false;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    HnButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    HnButtonComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this.angClass = (_a = {
                'hn-btn': true
            },
            _a["hn-btn-" + this.type] = this.type,
            _a);
    };
    /**
     * 点击事件
     */
    /**
     * 点击事件
     * @return {?}
     */
    HnButtonComponent.prototype.handleClick = /**
     * 点击事件
     * @return {?}
     */
    function () {
        this.click.emit();
    };
    HnButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-button',
                    exportAs: 'hnButton',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<button\n  nz-button\n  [nzType]=\"type\"\n  [nzGhost]=\"ghost\"\n  [nzLoading]=\"loading\"\n  [nzShape]=\"shape\"\n  [nzSize]=\"size\"\n  [nzBlock]=\"block\"\n  [ngClass]=\"angClass\"\n  [disabled]=\"disabled\"\n  (click)=\"handleClick()\">\n  <i *ngIf=\"icon\" nz-icon [nzType]=\"icon\" nzTheme=\"outline\"></i>\n  <ng-content></ng-content>\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    HnButtonComponent.ctorParameters = function () { return []; };
    HnButtonComponent.propDecorators = {
        type: [{ type: Input }],
        ghost: [{ type: Input }],
        loading: [{ type: Input }],
        shape: [{ type: Input }],
        size: [{ type: Input }],
        block: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        click: [{ type: Output }]
    };
    return HnButtonComponent;
}());
export { HnButtonComponent };
if (false) {
    /** @type {?} */
    HnButtonComponent.prototype.type;
    /** @type {?} */
    HnButtonComponent.prototype.ghost;
    /** @type {?} */
    HnButtonComponent.prototype.loading;
    /** @type {?} */
    HnButtonComponent.prototype.shape;
    /** @type {?} */
    HnButtonComponent.prototype.size;
    /** @type {?} */
    HnButtonComponent.prototype.block;
    /** @type {?} */
    HnButtonComponent.prototype.icon;
    /** @type {?} */
    HnButtonComponent.prototype.disabled;
    /** @type {?} */
    HnButtonComponent.prototype.click;
    /** @type {?} */
    HnButtonComponent.prototype.angClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tYnV0dG9uL2huLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFzQkU7UUFiUyxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxTQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJekMsQ0FBQzs7OztJQUVoQixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjs7UUFDRSxJQUFJLENBQUMsUUFBUTtnQkFDWCxRQUFRLEVBQUUsSUFBSTs7WUFDZCxHQUFDLFlBQVUsSUFBSSxDQUFDLElBQU0sSUFBRyxJQUFJLENBQUMsSUFBSTtlQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFXOzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLCtXQUF5QztpQkFDMUM7Ozs7O3VCQUVFLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFFTCxNQUFNOztJQXVCVCx3QkFBQztDQUFBLEFBekNELElBeUNDO1NBakNZLGlCQUFpQjs7O0lBQzVCLGlDQUEwQjs7SUFDMUIsa0NBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLGtDQUFvQjs7SUFDcEIsaUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLGlDQUFtQjs7SUFDbkIscUNBQTBCOztJQUUxQixrQ0FBd0Q7O0lBRXhELHFDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLWJ1dHRvbicsXG4gIGV4cG9ydEFzOiAnaG5CdXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhuQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZ2hvc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaGFwZSA9ICcnO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBibG9jayA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhbmdDbGFzczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBzZXRDbGFzcygpIHtcbiAgICB0aGlzLmFuZ0NsYXNzID0ge1xuICAgICAgJ2huLWJ0bic6IHRydWUsXG4gICAgICBbYGhuLWJ0bi0ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7ZcbiAgICovXG4gIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2suZW1pdCgpO1xuICB9XG59XG4iXX0=