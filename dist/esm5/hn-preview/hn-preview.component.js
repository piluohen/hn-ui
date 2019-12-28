/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnPreviewComponent = /** @class */ (function () {
    function HnPreviewComponent() {
        this.modeVisible = false;
        // 展示数据list
        this.list = [];
        // 展示图片索引
        this.index = 0;
        this.visibleChange = new EventEmitter();
        this.imgList = [];
    }
    Object.defineProperty(HnPreviewComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modeVisible;
        },
        // 是否展示图片
        set: 
        // 是否展示图片
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this.modeVisible = val;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.visibleChange.emit(val);
            }), 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HnPreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * 打开弹框，赋值
     */
    /**
     * 打开弹框，赋值
     * @return {?}
     */
    HnPreviewComponent.prototype.handleAfterOpen = /**
     * 打开弹框，赋值
     * @return {?}
     */
    function () {
        var _this = this;
        this.imgList = this.list;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.handleGoToIndex(_this.index);
        }), 0);
    };
    /**
     * 关闭弹框
     */
    /**
     * 关闭弹框
     * @return {?}
     */
    HnPreviewComponent.prototype.handleCancel = /**
     * 关闭弹框
     * @return {?}
     */
    function () {
        this.imgList = [];
        this.modeVisible = false;
        this.visibleChange.emit(false);
    };
    /**
     * 上一张操作
     */
    /**
     * 上一张操作
     * @return {?}
     */
    HnPreviewComponent.prototype.handlePrev = /**
     * 上一张操作
     * @return {?}
     */
    function () {
        this.carousel.pre();
    };
    /**
     * 下一张操作
     */
    /**
     * 下一张操作
     * @return {?}
     */
    HnPreviewComponent.prototype.handleNext = /**
     * 下一张操作
     * @return {?}
     */
    function () {
        this.carousel.next();
    };
    /**
     * 跳转到第index张
     * @param index 索引值
     */
    /**
     * 跳转到第index张
     * @param {?} index 索引值
     * @return {?}
     */
    HnPreviewComponent.prototype.handleGoToIndex = /**
     * 跳转到第index张
     * @param {?} index 索引值
     * @return {?}
     */
    function (index) {
        this.carousel.goTo(index);
    };
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
    HnPreviewComponent.ctorParameters = function () { return []; };
    HnPreviewComponent.propDecorators = {
        carousel: [{ type: ViewChild, args: ['carousel',] }],
        list: [{ type: Input }],
        index: [{ type: Input }],
        visible: [{ type: Input }],
        visibleChange: [{ type: Output }]
    };
    return HnPreviewComponent;
}());
export { HnPreviewComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLXByZXZpZXcvaG4tcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBZ0NFO1FBdkJBLGdCQUFXLEdBQUcsS0FBSyxDQUFDOztRQUlYLFNBQUksR0FBUSxFQUFFLENBQUM7O1FBRWYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQWFULGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEUsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQUVMLENBQUM7SUFmaEIsc0JBQ0ksdUNBQU87Ozs7UUFNWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBVkQsU0FBUzs7Ozs7OztRQUNULFVBQ1ksR0FBWTtZQUR4QixpQkFNQztZQUpDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7OztPQUFBOzs7O0lBV0QscUNBQVE7OztJQUFSLGNBQVksQ0FBQztJQUViOztPQUVHOzs7OztJQUNILDRDQUFlOzs7O0lBQWY7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFVOzs7O0lBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw0Q0FBZTs7Ozs7SUFBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQTNFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLDB6QkFBMEM7aUJBQzNDOzs7OzsyQkFJRSxTQUFTLFNBQUMsVUFBVTt1QkFFcEIsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLEtBQUs7Z0NBV0wsTUFBTTs7SUFnRFQseUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXBFWSxrQkFBa0I7OztJQUM3Qix5Q0FBb0I7O0lBRXBCLHNDQUFxQzs7SUFFckMsa0NBQXdCOztJQUV4QixtQ0FBbUI7O0lBYW5CLDJDQUFnRTs7SUFFaEUscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2huLXByZXZpZXcnLFxuICBleHBvcnRBczogJ2huUHJldmlldycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2huLXByZXZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhuUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vZGVWaXNpYmxlID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnY2Fyb3VzZWwnKSBjYXJvdXNlbDogYW55O1xuICAvLyDlsZXnpLrmlbDmja5saXN0XG4gIEBJbnB1dCgpIGxpc3Q6IGFueSA9IFtdO1xuICAvLyDlsZXnpLrlm77niYfntKLlvJVcbiAgQElucHV0KCkgaW5kZXggPSAwO1xuICAvLyDmmK/lkKblsZXnpLrlm77niYdcbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlVmlzaWJsZSA9IHZhbDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbCk7XG4gICAgfSwgMCk7XG4gIH1cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZVZpc2libGU7XG4gIH1cblxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaW1nTGlzdDogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8qKlxuICAgKiDmiZPlvIDlvLnmoYbvvIzotYvlgLxcbiAgICovXG4gIGhhbmRsZUFmdGVyT3BlbigpIHtcbiAgICB0aGlzLmltZ0xpc3QgPSB0aGlzLmxpc3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUdvVG9JbmRleCh0aGlzLmluZGV4KTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhbPpl63lvLnmoYZcbiAgICovXG4gIGhhbmRsZUNhbmNlbCgpIHtcbiAgICB0aGlzLmltZ0xpc3QgPSBbXTtcbiAgICB0aGlzLm1vZGVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4iuS4gOW8oOaTjeS9nFxuICAgKi9cbiAgaGFuZGxlUHJldigpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLnByZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+S4gOW8oOaTjeS9nFxuICAgKi9cbiAgaGFuZGxlTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDot7PovazliLDnrKxpbmRleOW8oFxuICAgKiBAcGFyYW0gaW5kZXgg57Si5byV5YC8XG4gICAqL1xuICBoYW5kbGVHb1RvSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwuZ29UbyhpbmRleCk7XG4gIH1cbn1cbiJdfQ==