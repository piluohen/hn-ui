/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnPreviewComponent {
    constructor() {
        this.modeVisible = false;
        // 展示数据list
        this.list = [];
        // 展示图片索引
        this.index = 0;
        this.visibleChange = new EventEmitter();
        this.imgList = [];
    }
    // 是否展示图片
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this.modeVisible = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.visibleChange.emit(val);
        }), 0);
    }
    /**
     * @return {?}
     */
    get visible() {
        return this.modeVisible;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * 打开弹框，赋值
     * @return {?}
     */
    handleAfterOpen() {
        this.imgList = this.list;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.handleGoToIndex(this.index);
        }), 0);
    }
    /**
     * 关闭弹框
     * @return {?}
     */
    handleCancel() {
        this.imgList = [];
        this.modeVisible = false;
        this.visibleChange.emit(false);
    }
    /**
     * 上一张操作
     * @return {?}
     */
    handlePrev() {
        this.carousel.pre();
    }
    /**
     * 下一张操作
     * @return {?}
     */
    handleNext() {
        this.carousel.next();
    }
    /**
     * 跳转到第index张
     * @param {?} index 索引值
     * @return {?}
     */
    handleGoToIndex(index) {
        this.carousel.goTo(index);
    }
}
HnPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'hn-preview',
                exportAs: 'hnPreview',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<nz-modal\n  [nzVisible]=\"modeVisible\"\n  nzWrapClassName=\"hn-preview-wrap\"\n  nzClassName=\"hn-preview\"\n  [nzContent]=\"modalContent\"\n  [nzFooter]=\"null\"\n  nzWidth=\"100%\"\n  (nzAfterOpen)=\"handleAfterOpen()\"\n  (nzOnCancel)=\"handleCancel()\">\n  <ng-template #modalContent>\n    <div class=\"hn-preview-btn hn-preview-btn-prev\" (click)=\"handlePrev()\">\n      <i nz-icon nzType=\"left\" nzTheme=\"outline\"></i>\n    </div>\n\n    <nz-carousel #carousel nzEffect=\"scrollx\">\n      <div nz-carousel-content *ngFor=\"let item of imgList\">\n        <img [src]=\"item.url\">\n      </div>\n    </nz-carousel>\n\n    <div class=\"hn-preview-btn hn-preview-btn-next\" (click)=\"handleNext()\">\n      <i nz-icon nzType=\"right\" nzTheme=\"outline\"></i>\n    </div>\n  </ng-template>\n</nz-modal>\n"
            }] }
];
/** @nocollapse */
HnPreviewComponent.ctorParameters = () => [];
HnPreviewComponent.propDecorators = {
    carousel: [{ type: ViewChild, args: ['carousel',] }],
    list: [{ type: Input }],
    index: [{ type: Input }],
    visible: [{ type: Input }],
    visibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HnPreviewComponent.prototype.modeVisible;
    /** @type {?} */
    HnPreviewComponent.prototype.carousel;
    /** @type {?} */
    HnPreviewComponent.prototype.list;
    /** @type {?} */
    HnPreviewComponent.prototype.index;
    /** @type {?} */
    HnPreviewComponent.prototype.visibleChange;
    /** @type {?} */
    HnPreviewComponent.prototype.imgList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLXByZXZpZXcvaG4tcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCO1FBdkJBLGdCQUFXLEdBQUcsS0FBSyxDQUFDOztRQUlYLFNBQUksR0FBUSxFQUFFLENBQUM7O1FBRWYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQWFULGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEUsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQUVMLENBQUM7Ozs7OztJQWZoQixJQUNJLE9BQU8sQ0FBQyxHQUFZO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQVFELFFBQVEsS0FBSSxDQUFDOzs7OztJQUtiLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUtELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQU1ELGVBQWUsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLDB6QkFBMEM7YUFDM0M7Ozs7O3VCQUlFLFNBQVMsU0FBQyxVQUFVO21CQUVwQixLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzs0QkFXTCxNQUFNOzs7O0lBbkJQLHlDQUFvQjs7SUFFcEIsc0NBQXFDOztJQUVyQyxrQ0FBd0I7O0lBRXhCLG1DQUFtQjs7SUFhbkIsMkNBQWdFOztJQUVoRSxxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tcHJldmlldycsXG4gIGV4cG9ydEFzOiAnaG5QcmV2aWV3JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tcHJldmlldy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG5QcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW9kZVZpc2libGUgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdjYXJvdXNlbCcpIGNhcm91c2VsOiBhbnk7XG4gIC8vIOWxleekuuaVsOaNrmxpc3RcbiAgQElucHV0KCkgbGlzdDogYW55ID0gW107XG4gIC8vIOWxleekuuWbvueJh+e0ouW8lVxuICBASW5wdXQoKSBpbmRleCA9IDA7XG4gIC8vIOaYr+WQpuWxleekuuWbvueJh1xuICBASW5wdXQoKVxuICBzZXQgdmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1vZGVWaXNpYmxlID0gdmFsO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsKTtcbiAgICB9LCAwKTtcbiAgfVxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlVmlzaWJsZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpbWdMaXN0OiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOW8ueahhu+8jOi1i+WAvFxuICAgKi9cbiAgaGFuZGxlQWZ0ZXJPcGVuKCkge1xuICAgIHRoaXMuaW1nTGlzdCA9IHRoaXMubGlzdDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlR29Ub0luZGV4KHRoaXMuaW5kZXgpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFs+mXreW8ueahhlxuICAgKi9cbiAgaGFuZGxlQ2FuY2VsKCkge1xuICAgIHRoaXMuaW1nTGlzdCA9IFtdO1xuICAgIHRoaXMubW9kZVZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICog5LiK5LiA5byg5pON5L2cXG4gICAqL1xuICBoYW5kbGVQcmV2KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwucHJlKCk7XG4gIH1cblxuICAvKipcbiAgICog5LiL5LiA5byg5pON5L2cXG4gICAqL1xuICBoYW5kbGVOZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOi3s+i9rOWIsOesrGluZGV45bygXG4gICAqIEBwYXJhbSBpbmRleCDntKLlvJXlgLxcbiAgICovXG4gIGhhbmRsZUdvVG9JbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5nb1RvKGluZGV4KTtcbiAgfVxufVxuIl19