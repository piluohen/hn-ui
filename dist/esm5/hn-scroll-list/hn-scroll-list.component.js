/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var HnScrollListComponent = /** @class */ (function () {
    function HnScrollListComponent() {
        // 滚动数据
        this.data = [];
        // 滚动项数量
        this.count = 6;
        // 一次滚动个数
        this.scrollCount = 1;
        // 滚动项高度
        this.itemHeight = 60;
        // 滚动动画速度
        this.speed = 300;
        // 滚动延迟
        this.delay = 2000;
        // 滚动项click事件
        this.click = new EventEmitter();
        this.y = 0;
        this.curr = 0;
        this.list = [];
        this.nextList = [];
        this.totalList = [];
        this.inAnimation = false;
        this.inEnter = false;
        this.initContentStyle = {
            transition: '',
            marginTop: '0px'
        };
        this.contentStyle = {};
        this.timer = null;
    }
    /**
     * @return {?}
     */
    HnScrollListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initData();
        this.reset();
    };
    /**
     * @return {?}
     */
    HnScrollListComponent.prototype.initData = /**
     * @return {?}
     */
    function () {
        this.contentHeight = this.itemHeight * this.count;
        this.scrollHeight = this.scrollCount * this.itemHeight;
        this.listStyle = {
            height: this.contentHeight + 'px'
        };
        this.itemStyle = {
            height: this.itemHeight + 'px'
        };
    };
    /**
     * 重置滚动
     */
    /**
     * 重置滚动
     * @return {?}
     */
    HnScrollListComponent.prototype.reset = /**
     * 重置滚动
     * @return {?}
     */
    function () {
        this.clearScroll();
        this.y = 0;
        this.curr = 0;
        this.inAnimation = false;
        this.contentStyle = tslib_1.__assign({}, this.initContentStyle);
        this.loop();
    };
    /**
     * 鼠标over操作
     */
    /**
     * 鼠标over操作
     * @return {?}
     */
    HnScrollListComponent.prototype.handleMouseover = /**
     * 鼠标over操作
     * @return {?}
     */
    function () {
        this.inEnter = true;
        this.clearScroll();
    };
    /**
     * 鼠标移出操作
     */
    /**
     * 鼠标移出操作
     * @return {?}
     */
    HnScrollListComponent.prototype.handleMouseout = /**
     * 鼠标移出操作
     * @return {?}
     */
    function () {
        this.inEnter = false;
        this.loop();
    };
    /**
     * 动画结束
     */
    /**
     * 动画结束
     * @return {?}
     */
    HnScrollListComponent.prototype.handleEnd = /**
     * 动画结束
     * @return {?}
     */
    function () {
        this.inAnimation = false;
        this.curr = 0;
        this.contentStyle = tslib_1.__assign({}, this.initContentStyle);
        this.loop();
    };
    /**
     * 滚动动画
     */
    /**
     * 滚动动画
     * @return {?}
     */
    HnScrollListComponent.prototype.loop = /**
     * 滚动动画
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.inEnter) {
            return;
        }
        this.getList();
        this.clearScroll();
        if (this.data.length >= this.count) {
            this.getNextList();
            this.totalList = tslib_1.__spread(this.list, this.nextList);
            this.timer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.inAnimation = true;
                _this.y += _this.scrollCount;
                _this.curr += _this.scrollCount;
                _this.contentStyle = {
                    transition: _this.inAnimation ? _this.speed + 'ms' : '',
                    marginTop: -(_this.curr * _this.itemHeight) + 'px'
                };
            }), this.delay);
        }
    };
    /**
     * 清除滚动
     */
    /**
     * 清除滚动
     * @return {?}
     */
    HnScrollListComponent.prototype.clearScroll = /**
     * 清除滚动
     * @return {?}
     */
    function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    /**
     * 获取列表
     */
    /**
     * 获取列表
     * @return {?}
     */
    HnScrollListComponent.prototype.getList = /**
     * 获取列表
     * @return {?}
     */
    function () {
        var _a = this, y = _a.y, count = _a.count, data = _a.data;
        /** @type {?} */
        var curr = y % data.length;
        /** @type {?} */
        var list = data.slice(curr, curr + count);
        // 补不足
        if (list.length < count && this.data.length >= count) {
            list = tslib_1.__spread(list, data.slice(0, count - list.length));
        }
        this.list = list;
    };
    /**
     * 获取下部分列表
     */
    /**
     * 获取下部分列表
     * @return {?}
     */
    HnScrollListComponent.prototype.getNextList = /**
     * 获取下部分列表
     * @return {?}
     */
    function () {
        var _a = this, y = _a.y, count = _a.count, scrollCount = _a.scrollCount, data = _a.data;
        /** @type {?} */
        var curr = (y + count) % data.length;
        /** @type {?} */
        var nextList = data.slice(curr, curr + scrollCount);
        // 补不足
        if (nextList.length < scrollCount) {
            nextList = tslib_1.__spread(nextList, data.slice(0, scrollCount - nextList.length));
        }
        this.nextList = nextList;
    };
    /**
     * 点击滚动项
     * @param row 滚动项数据
     */
    /**
     * 点击滚动项
     * @param {?} row 滚动项数据
     * @return {?}
     */
    HnScrollListComponent.prototype.handleClick = /**
     * 点击滚动项
     * @param {?} row 滚动项数据
     * @return {?}
     */
    function (row) {
        this.click.emit(row);
    };
    HnScrollListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-scroll-list',
                    exportAs: 'hnScrollList',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-scroll-list\" [ngStyle]=\"listStyle\"\n  (mouseover)=\"handleMouseover()\" (mouseout)=\"handleMouseout()\">\n  <div class=\"hn-scroll-list-content\"\n    [ngStyle]=\"contentStyle\" (transitionend)=\"handleEnd()\">\n    <div class=\"hn-scroll-list-item\" [ngStyle]=\"itemStyle\"\n      *ngFor=\"let item of totalList; index as index\"\n      (click)=\"handleClick(item)\">\n      <ng-template [ngTemplateOutlet]=\"renderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\">\n      </ng-template>\n    </div>\n  </div>\n</div>\n",
                    animations: []
                }] }
    ];
    /** @nocollapse */
    HnScrollListComponent.ctorParameters = function () { return []; };
    HnScrollListComponent.propDecorators = {
        data: [{ type: Input }],
        count: [{ type: Input }],
        scrollCount: [{ type: Input }],
        itemHeight: [{ type: Input }],
        speed: [{ type: Input }],
        delay: [{ type: Input }],
        renderItem: [{ type: Input }],
        click: [{ type: Output }]
    };
    return HnScrollListComponent;
}());
export { HnScrollListComponent };
if (false) {
    /** @type {?} */
    HnScrollListComponent.prototype.data;
    /** @type {?} */
    HnScrollListComponent.prototype.count;
    /** @type {?} */
    HnScrollListComponent.prototype.scrollCount;
    /** @type {?} */
    HnScrollListComponent.prototype.itemHeight;
    /** @type {?} */
    HnScrollListComponent.prototype.speed;
    /** @type {?} */
    HnScrollListComponent.prototype.delay;
    /** @type {?} */
    HnScrollListComponent.prototype.renderItem;
    /** @type {?} */
    HnScrollListComponent.prototype.click;
    /** @type {?} */
    HnScrollListComponent.prototype.y;
    /** @type {?} */
    HnScrollListComponent.prototype.curr;
    /** @type {?} */
    HnScrollListComponent.prototype.list;
    /** @type {?} */
    HnScrollListComponent.prototype.nextList;
    /** @type {?} */
    HnScrollListComponent.prototype.totalList;
    /** @type {?} */
    HnScrollListComponent.prototype.inAnimation;
    /** @type {?} */
    HnScrollListComponent.prototype.inEnter;
    /** @type {?} */
    HnScrollListComponent.prototype.initContentStyle;
    /** @type {?} */
    HnScrollListComponent.prototype.contentStyle;
    /** @type {?} */
    HnScrollListComponent.prototype.contentHeight;
    /** @type {?} */
    HnScrollListComponent.prototype.scrollHeight;
    /** @type {?} */
    HnScrollListComponent.prototype.listStyle;
    /** @type {?} */
    HnScrollListComponent.prototype.itemStyle;
    /** @type {?} */
    HnScrollListComponent.prototype.timer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2Nyb2xsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1zY3JvbGwtbGlzdC9obi1zY3JvbGwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVV2QjtJQWdERTs7UUFyQ1MsU0FBSSxHQUFVLEVBQUUsQ0FBQzs7UUFFakIsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUFFVixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFFaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFFaEIsVUFBSyxHQUFHLEdBQUcsQ0FBQzs7UUFFWixVQUFLLEdBQUcsSUFBSSxDQUFDOztRQUlaLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixxQkFBZ0IsR0FBRztZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQU9sQixVQUFLLEdBQVEsSUFBSSxDQUFDO0lBRUgsQ0FBQzs7OztJQUVoQix3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELHdDQUFROzs7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QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBVzs7Ozs7SUFBWCxVQUFZLEdBQVE7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Z0JBNUtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyw0akJBQThDO29CQUM5QyxVQUFVLEVBQUUsRUFBRTtpQkFDZjs7Ozs7dUJBR0UsS0FBSzt3QkFFTCxLQUFLOzhCQUVMLEtBQUs7NkJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7NkJBRUwsS0FBSzt3QkFFTCxNQUFNOztJQW9KVCw0QkFBQztDQUFBLEFBN0tELElBNktDO1NBcEtZLHFCQUFxQjs7O0lBRWhDLHFDQUEwQjs7SUFFMUIsc0NBQW1COztJQUVuQiw0Q0FBeUI7O0lBRXpCLDJDQUF5Qjs7SUFFekIsc0NBQXFCOztJQUVyQixzQ0FBc0I7O0lBRXRCLDJDQUF1Qzs7SUFFdkMsc0NBQXdEOztJQUV4RCxrQ0FBTTs7SUFDTixxQ0FBUzs7SUFDVCxxQ0FBZTs7SUFDZix5Q0FBbUI7O0lBQ25CLDBDQUFvQjs7SUFDcEIsNENBQW9COztJQUNwQix3Q0FBZ0I7O0lBRWhCLGlEQUdFOztJQUNGLDZDQUFrQjs7SUFFbEIsOENBQW1COztJQUNuQiw2Q0FBa0I7O0lBQ2xCLDBDQUFlOztJQUNmLDBDQUFlOztJQUVmLHNDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb25cbiAgLy8gLi4uXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1zY3JvbGwtbGlzdCcsXG4gIGV4cG9ydEFzOiAnaG5TY3JvbGxMaXN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybDogJy4vaG4tc2Nyb2xsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIblNjcm9sbExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyDmu5rliqjmlbDmja5cbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcbiAgLy8g5rua5Yqo6aG55pWw6YePXG4gIEBJbnB1dCgpIGNvdW50ID0gNjtcbiAgLy8g5LiA5qyh5rua5Yqo5Liq5pWwXG4gIEBJbnB1dCgpIHNjcm9sbENvdW50ID0gMTtcbiAgLy8g5rua5Yqo6aG56auY5bqmXG4gIEBJbnB1dCgpIGl0ZW1IZWlnaHQgPSA2MDtcbiAgLy8g5rua5Yqo5Yqo55S76YCf5bqmXG4gIEBJbnB1dCgpIHNwZWVkID0gMzAwO1xuICAvLyDmu5rliqjlu7bov59cbiAgQElucHV0KCkgZGVsYXkgPSAyMDAwO1xuXG4gIEBJbnB1dCgpIHJlbmRlckl0ZW06IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvLyDmu5rliqjpobljbGlja+S6i+S7tlxuICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHkgPSAwO1xuICBjdXJyID0gMDtcbiAgbGlzdDogYW55ID0gW107XG4gIG5leHRMaXN0OiBhbnkgPSBbXTtcbiAgdG90YWxMaXN0OiBhbnkgPSBbXTtcbiAgaW5BbmltYXRpb24gPSBmYWxzZTtcbiAgaW5FbnRlciA9IGZhbHNlO1xuXG4gIGluaXRDb250ZW50U3R5bGUgPSB7XG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgbWFyZ2luVG9wOiAnMHB4J1xuICB9O1xuICBjb250ZW50U3R5bGUgPSB7fTtcblxuICBjb250ZW50SGVpZ2h0OiBhbnk7XG4gIHNjcm9sbEhlaWdodDogYW55O1xuICBsaXN0U3R5bGU6IGFueTtcbiAgaXRlbVN0eWxlOiBhbnk7XG5cbiAgdGltZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBpbml0RGF0YSgpIHtcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLml0ZW1IZWlnaHQgKiB0aGlzLmNvdW50O1xuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zY3JvbGxDb3VudCAqIHRoaXMuaXRlbUhlaWdodDtcbiAgICB0aGlzLmxpc3RTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5jb250ZW50SGVpZ2h0ICsgJ3B4J1xuICAgIH07XG4gICAgdGhpcy5pdGVtU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuaXRlbUhlaWdodCArICdweCdcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9rua7muWKqFxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jbGVhclNjcm9sbCgpO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5jdXJyID0gMDtcbiAgICB0aGlzLmluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZW50U3R5bGUgPSB7IC4uLnRoaXMuaW5pdENvbnRlbnRTdHlsZSB9O1xuICAgIHRoaXMubG9vcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOm8oOagh292ZXLmk43kvZxcbiAgICovXG4gIGhhbmRsZU1vdXNlb3ZlcigpIHtcbiAgICB0aGlzLmluRW50ZXIgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJTY3JvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfnp7vlh7rmk43kvZxcbiAgICovXG4gIGhhbmRsZU1vdXNlb3V0KCkge1xuICAgIHRoaXMuaW5FbnRlciA9IGZhbHNlO1xuICAgIHRoaXMubG9vcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWKqOeUu+e7k+adn1xuICAgKi9cbiAgaGFuZGxlRW5kKCkge1xuICAgIHRoaXMuaW5BbmltYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmN1cnIgPSAwO1xuICAgIHRoaXMuY29udGVudFN0eWxlID0geyAuLi50aGlzLmluaXRDb250ZW50U3R5bGUgfTtcbiAgICB0aGlzLmxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmu5rliqjliqjnlLtcbiAgICovXG4gIGxvb3AoKSB7XG4gICAgaWYgKHRoaXMuaW5FbnRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldExpc3QoKTtcbiAgICB0aGlzLmNsZWFyU2Nyb2xsKCk7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPj0gdGhpcy5jb3VudCkge1xuICAgICAgdGhpcy5nZXROZXh0TGlzdCgpO1xuICAgICAgdGhpcy50b3RhbExpc3QgPSBbLi4udGhpcy5saXN0LCAuLi50aGlzLm5leHRMaXN0XTtcblxuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc2Nyb2xsQ291bnQ7XG4gICAgICAgIHRoaXMuY3VyciArPSB0aGlzLnNjcm9sbENvdW50O1xuICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZSA9IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLmluQW5pbWF0aW9uID8gdGhpcy5zcGVlZCArICdtcycgOiAnJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6IC0odGhpcy5jdXJyICogdGhpcy5pdGVtSGVpZ2h0KSArICdweCdcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaTmu5rliqhcbiAgICovXG4gIGNsZWFyU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluWIl+ihqFxuICAgKi9cbiAgZ2V0TGlzdCgpIHtcbiAgICBjb25zdCB7IHksIGNvdW50LCBkYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnIgPSB5ICUgZGF0YS5sZW5ndGg7XG4gICAgbGV0IGxpc3QgPSBkYXRhLnNsaWNlKGN1cnIsIGN1cnIgKyBjb3VudCk7XG4gICAgLy8g6KGl5LiN6LazXG4gICAgaWYgKGxpc3QubGVuZ3RoIDwgY291bnQgJiYgdGhpcy5kYXRhLmxlbmd0aCA+PSBjb3VudCkge1xuICAgICAgbGlzdCA9IFsuLi5saXN0LCAuLi5kYXRhLnNsaWNlKDAsIGNvdW50IC0gbGlzdC5sZW5ndGgpXTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bkuIvpg6jliIbliJfooahcbiAgICovXG4gIGdldE5leHRMaXN0KCkge1xuICAgIGNvbnN0IHsgeSwgY291bnQsIHNjcm9sbENvdW50LCBkYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnIgPSAoeSArIGNvdW50KSAlIGRhdGEubGVuZ3RoO1xuICAgIGxldCBuZXh0TGlzdCA9IGRhdGEuc2xpY2UoY3VyciwgY3VyciArIHNjcm9sbENvdW50KTtcbiAgICAvLyDooaXkuI3otrNcbiAgICBpZiAobmV4dExpc3QubGVuZ3RoIDwgc2Nyb2xsQ291bnQpIHtcbiAgICAgIG5leHRMaXN0ID0gWy4uLm5leHRMaXN0LCAuLi5kYXRhLnNsaWNlKDAsIHNjcm9sbENvdW50IC0gbmV4dExpc3QubGVuZ3RoKV07XG4gICAgfVxuICAgIHRoaXMubmV4dExpc3QgPSBuZXh0TGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDngrnlh7vmu5rliqjpoblcbiAgICogQHBhcmFtIHJvdyDmu5rliqjpobnmlbDmja5cbiAgICovXG4gIGhhbmRsZUNsaWNrKHJvdzogYW55KSB7XG4gICAgdGhpcy5jbGljay5lbWl0KHJvdyk7XG4gIH1cbn1cbiJdfQ==