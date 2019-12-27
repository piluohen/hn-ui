/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnButtonComponent {
    constructor() {
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
    ngOnInit() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    setClass() {
        this.angClass = {
            'hn-btn': true,
            [`hn-btn-${this.type}`]: this.type
        };
    }
    /**
     * 点击事件
     * @return {?}
     */
    handleClick() {
        this.click.emit();
    }
}
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
HnButtonComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2huLXVpLyIsInNvdXJjZXMiOlsiaG4tYnV0dG9uL2huLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsTUFBTSxPQUFPLGlCQUFpQjtJQWM1QjtRQWJTLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDakIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUl6QyxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsK1dBQXlDO2FBQzFDOzs7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBRUwsTUFBTTs7OztJQVRQLGlDQUEwQjs7SUFDMUIsa0NBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLGtDQUFvQjs7SUFDcEIsaUNBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLGlDQUFtQjs7SUFDbkIscUNBQTBCOztJQUUxQixrQ0FBd0Q7O0lBRXhELHFDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLWJ1dHRvbicsXG4gIGV4cG9ydEFzOiAnaG5CdXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9obi1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhuQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZ2hvc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaGFwZSA9ICcnO1xuICBASW5wdXQoKSBzaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBibG9jayA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhbmdDbGFzczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBzZXRDbGFzcygpIHtcbiAgICB0aGlzLmFuZ0NsYXNzID0ge1xuICAgICAgJ2huLWJ0bic6IHRydWUsXG4gICAgICBbYGhuLWJ0bi0ke3RoaXMudHlwZX1gXTogdGhpcy50eXBlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7ZcbiAgICovXG4gIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2suZW1pdCgpO1xuICB9XG59XG4iXX0=