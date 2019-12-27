/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CountUp } from 'countup.js';
export class HnCountupComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.instance = null;
        // 开始值
        this.startVal = 0;
        // 持续时间
        this.duration = 1000;
        // 小数位
        this.decimalPlaces = 0;
        // 完全展示回调
        this.ready = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.delay = this.duration / 1000;
        this.create();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const value = changes.endVal.currentValue;
        if (this.instance) {
            this.instance.update(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestory() {
        this.instance = null;
    }
    // 生成
    /**
     * @return {?}
     */
    create() {
        if (this.instance) {
            return;
        }
        /** @type {?} */
        const dom = this.el.nativeElement.querySelector('.hn-countup');
        /** @type {?} */
        const instance = new CountUp(dom, this.endVal, {
            startVal: this.startVal,
            duration: this.delay,
            decimalPlaces: this.decimalPlaces
        });
        if (instance.error) {
            return;
        }
        this.instance = instance;
        if (this.delay < 0) {
            this.ready.emit({ instance, CountUp });
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            instance.start((/**
             * @return {?}
             */
            () => {
                this.ready.emit({ instance, CountUp });
            }));
        }), this.delay);
    }
}
HnCountupComponent.decorators = [
    { type: Component, args: [{
                selector: 'hn-countup',
                exportAs: 'hnCountup',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span class="hn-countup"></span>
  `
            }] }
];
/** @nocollapse */
HnCountupComponent.ctorParameters = () => [
    { type: ElementRef }
];
HnCountupComponent.propDecorators = {
    startVal: [{ type: Input }],
    endVal: [{ type: Input }],
    duration: [{ type: Input }],
    decimalPlaces: [{ type: Input }],
    ready: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HnCountupComponent.prototype.instance;
    /** @type {?} */
    HnCountupComponent.prototype.startVal;
    /** @type {?} */
    HnCountupComponent.prototype.endVal;
    /** @type {?} */
    HnCountupComponent.prototype.duration;
    /** @type {?} */
    HnCountupComponent.prototype.decimalPlaces;
    /** @type {?} */
    HnCountupComponent.prototype.ready;
    /** @type {?} */
    HnCountupComponent.prototype.delay;
    /**
     * @type {?}
     * @private
     */
    HnCountupComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tY291bnR1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLWNvdW50dXAvaG4tY291bnR1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFZckMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQWdCN0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFmbEMsYUFBUSxHQUFHLElBQUksQ0FBQzs7UUFHUCxhQUFRLEdBQUcsQ0FBQyxDQUFDOztRQUliLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBRWhCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDOztRQUVqQixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJbkIsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBWTs7Y0FDaEIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBR0QsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7O2NBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7O2NBQ3hELFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO1FBQ0YsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFDRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxRQUFRLENBQUMsS0FBSzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OztZQWpCQyxVQUFVOzs7dUJBc0JULEtBQUs7cUJBRUwsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLEtBQUs7b0JBRUwsTUFBTTs7OztJQVhQLHNDQUFnQjs7SUFHaEIsc0NBQXNCOztJQUV0QixvQ0FBd0I7O0lBRXhCLHNDQUF5Qjs7SUFFekIsMkNBQTJCOztJQUUzQixtQ0FBd0Q7O0lBRXhELG1DQUFjOzs7OztJQUVGLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291bnRVcCB9IGZyb20gJ2NvdW50dXAuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdobi1jb3VudHVwJyxcbiAgZXhwb3J0QXM6ICdobkNvdW50dXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJobi1jb3VudHVwXCI+PC9zcGFuPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEhuQ291bnR1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2UgPSBudWxsO1xuXG4gIC8vIOW8gOWni+WAvFxuICBASW5wdXQoKSBzdGFydFZhbCA9IDA7XG4gIC8vIOe7k+adn+WAvFxuICBASW5wdXQoKSBlbmRWYWw6IG51bWJlcjtcbiAgLy8g5oyB57ut5pe26Ze0XG4gIEBJbnB1dCgpIGR1cmF0aW9uID0gMTAwMDtcbiAgLy8g5bCP5pWw5L2NXG4gIEBJbnB1dCgpIGRlY2ltYWxQbGFjZXMgPSAwO1xuICAvLyDlrozlhajlsZXnpLrlm57osINcbiAgQE91dHB1dCgpIHJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkZWxheTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZWxheSA9IHRoaXMuZHVyYXRpb24gLyAxMDAwO1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXMuZW5kVmFsLmN1cnJlbnRWYWx1ZTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0b3J5KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgLy8g55Sf5oiQXG4gIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkb20gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhuLWNvdW50dXAnKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb3VudFVwKGRvbSwgdGhpcy5lbmRWYWwsIHtcbiAgICAgIHN0YXJ0VmFsOiB0aGlzLnN0YXJ0VmFsLFxuICAgICAgZHVyYXRpb246IHRoaXMuZGVsYXksXG4gICAgICBkZWNpbWFsUGxhY2VzOiB0aGlzLmRlY2ltYWxQbGFjZXNcbiAgICB9KTtcbiAgICBpZiAoaW5zdGFuY2UuZXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGlmICh0aGlzLmRlbGF5IDwgMCkge1xuICAgICAgdGhpcy5yZWFkeS5lbWl0KHsgaW5zdGFuY2UsIENvdW50VXAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5zdGFuY2Uuc3RhcnQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlYWR5LmVtaXQoeyBpbnN0YW5jZSwgQ291bnRVcCB9KTtcbiAgICAgIH0pO1xuICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG59XG4iXX0=