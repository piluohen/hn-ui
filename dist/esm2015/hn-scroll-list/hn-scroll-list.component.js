/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
export class HnScrollListComponent {
    constructor() {
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
    ngOnInit() {
        this.initData();
        this.reset();
    }
    /**
     * @return {?}
     */
    initData() {
        this.contentHeight = this.itemHeight * this.count;
        this.scrollHeight = this.scrollCount * this.itemHeight;
        this.listStyle = {
            height: this.contentHeight + 'px'
        };
        this.itemStyle = {
            height: this.itemHeight + 'px'
        };
    }
    /**
     * 重置滚动
     * @return {?}
     */
    reset() {
        this.clearScroll();
        this.y = 0;
        this.curr = 0;
        this.inAnimation = false;
        this.contentStyle = Object.assign({}, this.initContentStyle);
        this.loop();
    }
    /**
     * 鼠标over操作
     * @return {?}
     */
    handleMouseover() {
        this.inEnter = true;
        this.clearScroll();
    }
    /**
     * 鼠标移出操作
     * @return {?}
     */
    handleMouseout() {
        this.inEnter = false;
        this.loop();
    }
    /**
     * 动画结束
     * @return {?}
     */
    handleEnd() {
        this.inAnimation = false;
        this.curr = 0;
        this.contentStyle = Object.assign({}, this.initContentStyle);
        this.loop();
    }
    /**
     * 滚动动画
     * @return {?}
     */
    loop() {
        if (this.inEnter) {
            return;
        }
        this.getList();
        this.clearScroll();
        if (this.data.length >= this.count) {
            this.getNextList();
            this.totalList = [...this.list, ...this.nextList];
            this.timer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.inAnimation = true;
                this.y += this.scrollCount;
                this.curr += this.scrollCount;
                this.contentStyle = {
                    transition: this.inAnimation ? this.speed + 'ms' : '',
                    marginTop: -(this.curr * this.itemHeight) + 'px'
                };
            }), this.delay);
        }
    }
    /**
     * 清除滚动
     * @return {?}
     */
    clearScroll() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    /**
     * 获取列表
     * @return {?}
     */
    getList() {
        const { y, count, data } = this;
        /** @type {?} */
        const curr = y % data.length;
        /** @type {?} */
        let list = data.slice(curr, curr + count);
        // 补不足
        if (list.length < count && this.data.length >= count) {
            list = [...list, ...data.slice(0, count - list.length)];
        }
        this.list = list;
    }
    /**
     * 获取下部分列表
     * @return {?}
     */
    getNextList() {
        const { y, count, scrollCount, data } = this;
        /** @type {?} */
        const curr = (y + count) % data.length;
        /** @type {?} */
        let nextList = data.slice(curr, curr + scrollCount);
        // 补不足
        if (nextList.length < scrollCount) {
            nextList = [...nextList, ...data.slice(0, scrollCount - nextList.length)];
        }
        this.nextList = nextList;
    }
    /**
     * 点击滚动项
     * @param {?} row 滚动项数据
     * @return {?}
     */
    handleClick(row) {
        this.click.emit(row);
    }
}
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
HnScrollListComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tc2Nyb2xsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaG4tdWkvIiwic291cmNlcyI6WyJobi1zY3JvbGwtbGlzdC9obi1zY3JvbGwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBbUJ2QixNQUFNLE9BQU8scUJBQXFCO0lBdUNoQzs7UUFyQ1MsU0FBSSxHQUFVLEVBQUUsQ0FBQzs7UUFFakIsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUFFVixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFFaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFFaEIsVUFBSyxHQUFHLEdBQUcsQ0FBQzs7UUFFWixVQUFLLEdBQUcsSUFBSSxDQUFDOztRQUlaLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixxQkFBZ0IsR0FBRztZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7UUFDRixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQU9sQixVQUFLLEdBQVEsSUFBSSxDQUFDO0lBRUgsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFF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VCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyw0akJBQThDO2dCQUM5QyxVQUFVLEVBQUUsRUFBRTthQUNmOzs7OzttQkFHRSxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSzt5QkFFTCxLQUFLO29CQUVMLE1BQU07Ozs7SUFkUCxxQ0FBMEI7O0lBRTFCLHNDQUFtQjs7SUFFbkIsNENBQXlCOztJQUV6QiwyQ0FBeUI7O0lBRXpCLHNDQUFxQjs7SUFFckIsc0NBQXNCOztJQUV0QiwyQ0FBdUM7O0lBRXZDLHNDQUF3RDs7SUFFeEQsa0NBQU07O0lBQ04scUNBQVM7O0lBQ1QscUNBQWU7O0lBQ2YseUNBQW1COztJQUNuQiwwQ0FBb0I7O0lBQ3BCLDRDQUFvQjs7SUFDcEIsd0NBQWdCOztJQUVoQixpREFHRTs7SUFDRiw2Q0FBa0I7O0lBRWxCLDhDQUFtQjs7SUFDbkIsNkNBQWtCOztJQUNsQiwwQ0FBZTs7SUFDZiwwQ0FBZTs7SUFFZixzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uXG4gIC8vIC4uLlxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tc2Nyb2xsLWxpc3QnLFxuICBleHBvcnRBczogJ2huU2Nyb2xsTGlzdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2huLXNjcm9sbC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW11cbn0pXG5leHBvcnQgY2xhc3MgSG5TY3JvbGxMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8g5rua5Yqo5pWw5o2uXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XG4gIC8vIOa7muWKqOmhueaVsOmHj1xuICBASW5wdXQoKSBjb3VudCA9IDY7XG4gIC8vIOS4gOasoea7muWKqOS4quaVsFxuICBASW5wdXQoKSBzY3JvbGxDb3VudCA9IDE7XG4gIC8vIOa7muWKqOmhuemrmOW6plxuICBASW5wdXQoKSBpdGVtSGVpZ2h0ID0gNjA7XG4gIC8vIOa7muWKqOWKqOeUu+mAn+W6plxuICBASW5wdXQoKSBzcGVlZCA9IDMwMDtcbiAgLy8g5rua5Yqo5bu26L+fXG4gIEBJbnB1dCgpIGRlbGF5ID0gMjAwMDtcblxuICBASW5wdXQoKSByZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLy8g5rua5Yqo6aG5Y2xpY2vkuovku7ZcbiAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB5ID0gMDtcbiAgY3VyciA9IDA7XG4gIGxpc3Q6IGFueSA9IFtdO1xuICBuZXh0TGlzdDogYW55ID0gW107XG4gIHRvdGFsTGlzdDogYW55ID0gW107XG4gIGluQW5pbWF0aW9uID0gZmFsc2U7XG4gIGluRW50ZXIgPSBmYWxzZTtcblxuICBpbml0Q29udGVudFN0eWxlID0ge1xuICAgIHRyYW5zaXRpb246ICcnLFxuICAgIG1hcmdpblRvcDogJzBweCdcbiAgfTtcbiAgY29udGVudFN0eWxlID0ge307XG5cbiAgY29udGVudEhlaWdodDogYW55O1xuICBzY3JvbGxIZWlnaHQ6IGFueTtcbiAgbGlzdFN0eWxlOiBhbnk7XG4gIGl0ZW1TdHlsZTogYW55O1xuXG4gIHRpbWVyOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgaW5pdERhdGEoKSB7XG4gICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5pdGVtSGVpZ2h0ICogdGhpcy5jb3VudDtcbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHRoaXMuc2Nyb2xsQ291bnQgKiB0aGlzLml0ZW1IZWlnaHQ7XG4gICAgdGhpcy5saXN0U3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuY29udGVudEhlaWdodCArICdweCdcbiAgICB9O1xuICAgIHRoaXMuaXRlbVN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLml0ZW1IZWlnaHQgKyAncHgnXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7mu5rliqhcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuY2xlYXJTY3JvbGwoKTtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMuY3VyciA9IDA7XG4gICAgdGhpcy5pbkFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudFN0eWxlID0geyAuLi50aGlzLmluaXRDb250ZW50U3R5bGUgfTtcbiAgICB0aGlzLmxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIdvdmVy5pON5L2cXG4gICAqL1xuICBoYW5kbGVNb3VzZW92ZXIoKSB7XG4gICAgdGhpcy5pbkVudGVyID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyU2Nyb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICog6byg5qCH56e75Ye65pON5L2cXG4gICAqL1xuICBoYW5kbGVNb3VzZW91dCgpIHtcbiAgICB0aGlzLmluRW50ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliqjnlLvnu5PmnZ9cbiAgICovXG4gIGhhbmRsZUVuZCgpIHtcbiAgICB0aGlzLmluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyID0gMDtcbiAgICB0aGlzLmNvbnRlbnRTdHlsZSA9IHsgLi4udGhpcy5pbml0Q29udGVudFN0eWxlIH07XG4gICAgdGhpcy5sb29wKCk7XG4gIH1cblxuICAvKipcbiAgICog5rua5Yqo5Yqo55S7XG4gICAqL1xuICBsb29wKCkge1xuICAgIGlmICh0aGlzLmluRW50ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRMaXN0KCk7XG4gICAgdGhpcy5jbGVhclNjcm9sbCgpO1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID49IHRoaXMuY291bnQpIHtcbiAgICAgIHRoaXMuZ2V0TmV4dExpc3QoKTtcbiAgICAgIHRoaXMudG90YWxMaXN0ID0gWy4uLnRoaXMubGlzdCwgLi4udGhpcy5uZXh0TGlzdF07XG5cbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbkFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNjcm9sbENvdW50O1xuICAgICAgICB0aGlzLmN1cnIgKz0gdGhpcy5zY3JvbGxDb3VudDtcbiAgICAgICAgdGhpcy5jb250ZW50U3R5bGUgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5pbkFuaW1hdGlvbiA/IHRoaXMuc3BlZWQgKyAnbXMnIDogJycsXG4gICAgICAgICAgbWFyZ2luVG9wOiAtKHRoaXMuY3VyciAqIHRoaXMuaXRlbUhlaWdodCkgKyAncHgnXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5riF6Zmk5rua5YqoXG4gICAqL1xuICBjbGVhclNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bliJfooahcbiAgICovXG4gIGdldExpc3QoKSB7XG4gICAgY29uc3QgeyB5LCBjb3VudCwgZGF0YSB9ID0gdGhpcztcbiAgICBjb25zdCBjdXJyID0geSAlIGRhdGEubGVuZ3RoO1xuICAgIGxldCBsaXN0ID0gZGF0YS5zbGljZShjdXJyLCBjdXJyICsgY291bnQpO1xuICAgIC8vIOihpeS4jei2s1xuICAgIGlmIChsaXN0Lmxlbmd0aCA8IGNvdW50ICYmIHRoaXMuZGF0YS5sZW5ndGggPj0gY291bnQpIHtcbiAgICAgIGxpc3QgPSBbLi4ubGlzdCwgLi4uZGF0YS5zbGljZSgwLCBjb3VudCAtIGxpc3QubGVuZ3RoKV07XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5LiL6YOo5YiG5YiX6KGoXG4gICAqL1xuICBnZXROZXh0TGlzdCgpIHtcbiAgICBjb25zdCB7IHksIGNvdW50LCBzY3JvbGxDb3VudCwgZGF0YSB9ID0gdGhpcztcbiAgICBjb25zdCBjdXJyID0gKHkgKyBjb3VudCkgJSBkYXRhLmxlbmd0aDtcbiAgICBsZXQgbmV4dExpc3QgPSBkYXRhLnNsaWNlKGN1cnIsIGN1cnIgKyBzY3JvbGxDb3VudCk7XG4gICAgLy8g6KGl5LiN6LazXG4gICAgaWYgKG5leHRMaXN0Lmxlbmd0aCA8IHNjcm9sbENvdW50KSB7XG4gICAgICBuZXh0TGlzdCA9IFsuLi5uZXh0TGlzdCwgLi4uZGF0YS5zbGljZSgwLCBzY3JvbGxDb3VudCAtIG5leHRMaXN0Lmxlbmd0aCldO1xuICAgIH1cbiAgICB0aGlzLm5leHRMaXN0ID0gbmV4dExpc3Q7XG4gIH1cblxuICAvKipcbiAgICog54K55Ye75rua5Yqo6aG5XG4gICAqIEBwYXJhbSByb3cg5rua5Yqo6aG55pWw5o2uXG4gICAqL1xuICBoYW5kbGVDbGljayhyb3c6IGFueSkge1xuICAgIHRoaXMuY2xpY2suZW1pdChyb3cpO1xuICB9XG59XG4iXX0=