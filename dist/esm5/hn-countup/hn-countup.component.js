/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CountUp } from 'countup.js';
var HnCountupComponent = /** @class */ (function () {
    function HnCountupComponent(el) {
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
    HnCountupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.delay = this.duration / 1000;
        this.create();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HnCountupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var value = changes.endVal.currentValue;
        if (this.instance) {
            this.instance.update(value);
        }
    };
    /**
     * @return {?}
     */
    HnCountupComponent.prototype.ngOnDestory = /**
     * @return {?}
     */
    function () {
        this.instance = null;
    };
    // 生成
    // 生成
    /**
     * @return {?}
     */
    HnCountupComponent.prototype.create = 
    // 生成
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            return;
        }
        /** @type {?} */
        var dom = this.el.nativeElement.querySelector('.hn-countup');
        /** @type {?} */
        var instance = new CountUp(dom, this.endVal, {
            startVal: this.startVal,
            duration: this.delay,
            decimalPlaces: this.decimalPlaces
        });
        if (instance.error) {
            return;
        }
        this.instance = instance;
        if (this.delay < 0) {
            this.ready.emit({ instance: instance, CountUp: CountUp });
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            instance.start((/**
             * @return {?}
             */
            function () {
                _this.ready.emit({ instance: instance, CountUp: CountUp });
            }));
        }), this.delay);
    };
    HnCountupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-countup',
                    exportAs: 'hnCountup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <span class=\"hn-countup\"></span>\n  "
                }] }
    ];
    /** @nocollapse */
    HnCountupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HnCountupComponent.propDecorators = {
        startVal: [{ type: Input }],
        endVal: [{ type: Input }],
        duration: [{ type: Input }],
        decimalPlaces: [{ type: Input }],
        ready: [{ type: Output }]
    };
    return HnCountupComponent;
}());
export { HnCountupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG4tY291bnR1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9obi11aS8iLCJzb3VyY2VzIjpbImhuLWNvdW50dXAvaG4tY291bnR1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckM7SUEwQkUsNEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZmxDLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBR1AsYUFBUSxHQUFHLENBQUMsQ0FBQzs7UUFJYixhQUFRLEdBQUcsSUFBSSxDQUFDOztRQUVoQixrQkFBYSxHQUFHLENBQUMsQ0FBQzs7UUFFakIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSW5CLENBQUM7Ozs7SUFFdEMscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBWTs7WUFDaEIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUs7Ozs7O0lBQ0wsbUNBQU07Ozs7O0lBQU47UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjs7WUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7WUFDeEQsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7UUFDRixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFDRCxVQUFVOzs7UUFBQztZQUNULFFBQVEsQ0FBQyxLQUFLOzs7WUFBQztnQkFDYixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDhDQUVUO2lCQUNGOzs7O2dCQWpCQyxVQUFVOzs7MkJBc0JULEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLO2dDQUVMLEtBQUs7d0JBRUwsTUFBTTs7SUErQ1QseUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQTNEWSxrQkFBa0I7OztJQUM3QixzQ0FBZ0I7O0lBR2hCLHNDQUFzQjs7SUFFdEIsb0NBQXdCOztJQUV4QixzQ0FBeUI7O0lBRXpCLDJDQUEyQjs7SUFFM0IsbUNBQXdEOztJQUV4RCxtQ0FBYzs7Ozs7SUFFRixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50VXAgfSBmcm9tICdjb3VudHVwLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG4tY291bnR1cCcsXG4gIGV4cG9ydEFzOiAnaG5Db3VudHVwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiaG4tY291bnR1cFwiPjwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBIbkNvdW50dXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlID0gbnVsbDtcblxuICAvLyDlvIDlp4vlgLxcbiAgQElucHV0KCkgc3RhcnRWYWwgPSAwO1xuICAvLyDnu5PmnZ/lgLxcbiAgQElucHV0KCkgZW5kVmFsOiBudW1iZXI7XG4gIC8vIOaMgee7reaXtumXtFxuICBASW5wdXQoKSBkdXJhdGlvbiA9IDEwMDA7XG4gIC8vIOWwj+aVsOS9jVxuICBASW5wdXQoKSBkZWNpbWFsUGxhY2VzID0gMDtcbiAgLy8g5a6M5YWo5bGV56S65Zue6LCDXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGVsYXk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLmR1cmF0aW9uIC8gMTAwMDtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzLmVuZFZhbC5jdXJyZW50VmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdG9yeSgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIC8vIOeUn+aIkFxuICBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZG9tID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5obi1jb3VudHVwJyk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ291bnRVcChkb20sIHRoaXMuZW5kVmFsLCB7XG4gICAgICBzdGFydFZhbDogdGhpcy5zdGFydFZhbCxcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmRlbGF5LFxuICAgICAgZGVjaW1hbFBsYWNlczogdGhpcy5kZWNpbWFsUGxhY2VzXG4gICAgfSk7XG4gICAgaWYgKGluc3RhbmNlLmVycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICBpZiAodGhpcy5kZWxheSA8IDApIHtcbiAgICAgIHRoaXMucmVhZHkuZW1pdCh7IGluc3RhbmNlLCBDb3VudFVwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGluc3RhbmNlLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KHsgaW5zdGFuY2UsIENvdW50VXAgfSk7XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxufVxuIl19