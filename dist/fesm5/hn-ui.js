import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Output, NgModule, ViewChild, forwardRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUp } from 'countup.js';
import { __spread, __assign, __decorate, __metadata } from 'tslib';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { NzIconModule, NzCarouselModule, NzModalModule, NzButtonModule, NzCheckboxModule, NzTableModule, NzInputModule, NzDatePickerModule, NzFormModule, NzGridModule, NzTimePickerModule, NzEmptyModule, NzSelectModule, NzCascaderModule, NzTreeModule, NzTreeSelectModule, NzInputNumberModule, zh_CN, NZ_I18N } from 'ng-zorro-antd';
import { FocusMonitor } from '@angular/cdk/a11y';
import { InputBoolean } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnCountupModule = /** @class */ (function () {
    function HnCountupModule() {
    }
    HnCountupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [HnCountupComponent],
                    exports: [HnCountupComponent]
                },] }
    ];
    return HnCountupModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ngZorro = [
    NzIconModule,
    NzCarouselModule,
    NzModalModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTableModule,
    NzInputModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzTimePickerModule,
    NzEmptyModule,
    NzSelectModule,
    NzCascaderModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzInputNumberModule
];
var ɵ0 = zh_CN;
var NgZorroModule = /** @class */ (function () {
    function NgZorroModule() {
    }
    NgZorroModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([CommonModule, FormsModule, ReactiveFormsModule], ngZorro),
                    declarations: [],
                    providers: [{ provide: NZ_I18N, useValue: ɵ0 }],
                    exports: __spread([CommonModule, FormsModule, ReactiveFormsModule], ngZorro)
                },] }
    ];
    return NgZorroModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnPreviewModule = /** @class */ (function () {
    function HnPreviewModule() {
    }
    HnPreviewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnPreviewComponent],
                    exports: [HnPreviewComponent]
                },] }
    ];
    return HnPreviewModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.contentStyle = __assign({}, this.initContentStyle);
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
        this.contentStyle = __assign({}, this.initContentStyle);
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
            this.totalList = __spread(this.list, this.nextList);
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
            list = __spread(list, data.slice(0, count - list.length));
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
            nextList = __spread(nextList, data.slice(0, scrollCount - nextList.length));
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnScrollListModule = /** @class */ (function () {
    function HnScrollListModule() {
    }
    HnScrollListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [HnScrollListComponent],
                    exports: [HnScrollListComponent]
                },] }
    ];
    return HnScrollListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnButtonModule = /** @class */ (function () {
    function HnButtonModule() {
    }
    HnButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnButtonComponent],
                    exports: [HnButtonComponent]
                },] }
    ];
    return HnButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-checkbox-group/hn-checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnCheckboxGroupComponent = /** @class */ (function () {
    function HnCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.options = [];
        this.disabled = false;
        this.checkAll = false;
        this.checkAllLabel = '全选';
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        /**
         * change方法
         */
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        /**
         * touch方法
         */
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    /**
     * 索引
     * @param _index 索引值
     * @param option 子项
     */
    /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.trackByOption = /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    function (_index, option) {
        return option.value;
    };
    /**
     * 写入value方法
     * @param value 值
     */
    /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.writeValue = /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    function (value) {
        if (!value) {
            return;
        }
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = value.includes(item.value);
        }));
        this.changeAllCheked(value);
        this.data = value;
        this.cdr.markForCheck();
    };
    /**
     * 注册change方法
     * @param fn change方法
     */
    /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.registerOnChange = /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * 注册touch事件
     * @param fn touch方法
     */
    /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.registerOnTouched = /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * 设置禁用状态
     * @param isDisabled 是否禁用
     */
    /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.setDisabledState = /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * checkbox选中值改变操作
     */
    /**
     * checkbox选中值改变操作
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.handleChange = /**
     * checkbox选中值改变操作
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.filterData(this.options);
        this.changeAllCheked(data);
        this.onChange(data);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.handleAllChecked = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!item.disabled) {
                item.checked = type;
            }
        }));
        /** @type {?} */
        var data = this.filterData(this.options);
        this.onChange(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.changeAllCheked = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var arr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return !item.disabled || (item.disabled && item.checked);
        }));
        if (data.length === arr.length) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else if (data.length === 0) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    HnCheckboxGroupComponent.prototype.filterData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.value;
        }));
    };
    HnCheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-checkbox-group',
                    template: "<label\n  *ngIf=\"checkAll\"\n  nz-checkbox\n  [(nzChecked)]=\"allChecked\"\n  (nzCheckedChange)=\"handleAllChecked($event)\"\n  [nzIndeterminate]=\"indeterminate\">\n  {{checkAllLabel}}\n</label>\n\n<label nz-checkbox\n  class=\"ant-checkbox-group-item\"\n  *ngFor=\"let option of options; trackBy:trackByOption\"\n  [nzDisabled]=\"option.disabled || disabled\"\n  [(nzChecked)]=\"option.checked\"\n  (nzCheckedChange)=\"handleChange()\">\n  <span>{{ option.label }}</span>\n</label>\n",
                    exportAs: 'hnCheckboxGroup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return HnCheckboxGroupComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    HnCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    HnCheckboxGroupComponent.propDecorators = {
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        checkAll: [{ type: Input }],
        checkAllLabel: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], HnCheckboxGroupComponent.prototype, "disabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], HnCheckboxGroupComponent.prototype, "checkAll", void 0);
    return HnCheckboxGroupComponent;
}());
if (false) {
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.disabled;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.checkAll;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.checkAllLabel;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.data;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.allChecked;
    /** @type {?} */
    HnCheckboxGroupComponent.prototype.indeterminate;
    /**
     * change方法
     * @type {?}
     */
    HnCheckboxGroupComponent.prototype.onChange;
    /**
     * touch方法
     * @type {?}
     */
    HnCheckboxGroupComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    HnCheckboxGroupComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-checkbox-group/hn-checkbox-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnCheckboxGroupModule = /** @class */ (function () {
    function HnCheckboxGroupModule() {
    }
    HnCheckboxGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgZorroModule
                    ],
                    declarations: [
                        HnCheckboxGroupComponent
                    ],
                    exports: [HnCheckboxGroupComponent],
                },] }
    ];
    return HnCheckboxGroupModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/hn-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnTableComponent = /** @class */ (function () {
    function HnTableComponent() {
        this.data = [];
        this.params = {};
        this.columns = [];
        this.totalKey = 'total';
        this.contentKey = 'list';
        this.showSelect = true;
        this.showPagination = true;
        this.scroll = {};
        this.bordered = false;
        this.render = {};
        this.checkChange = new EventEmitter();
        this.isAllDisplayDataChecked = false;
        this.isOperating = false;
        this.isIndeterminate = false;
        this.checkedData = [];
        this.mapOfCheckedId = {};
        this.numberOfChecked = 0;
        this.tableData = [];
        this.tableColumns = [];
        this.loading = true;
        this.pagination = {
            total: 0,
            pageSize: 10,
            pageIndex: 1
        };
    }
    /**
     * @return {?}
     */
    HnTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tableColumns = this.columns.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.render = _this.render[item.renderKey];
            return item;
        }));
        this.getList();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HnTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.params) {
            var _a = changes.params, currentValue = _a.currentValue, firstChange = _a.firstChange;
            if (!firstChange) {
                this.params = currentValue;
                this.getInterfaceList(true);
            }
        }
        if (changes.data) {
            var _b = changes.data, currentValue = _b.currentValue, firstChange = _b.firstChange;
            if (!firstChange) {
                this.data = currentValue;
                this.getLocalData();
            }
        }
    };
    /**
     * 获取数据
     * @param reset 是否重置列表
     */
    /**
     * 获取数据
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    HnTableComponent.prototype.getList = /**
     * 获取数据
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    function (reset) {
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pagination.pageIndex = 1;
        }
        if (this.api && this.data.length === 0) {
            this.getInterfaceList();
        }
        else {
            this.getLocalData();
        }
    };
    /**
     * 获取本地传入数据
     * @param data 本地数据
     */
    /**
     * 获取本地传入数据
     * @return {?}
     */
    HnTableComponent.prototype.getLocalData = /**
     * 获取本地传入数据
     * @return {?}
     */
    function () {
        if (this.showPagination) {
            var _a = this.pagination, pageSize = _a.pageSize, pageIndex = _a.pageIndex;
            /** @type {?} */
            var data = __spread(this.data);
            /** @type {?} */
            var first = pageSize * (pageIndex - 1);
            /** @type {?} */
            var end = pageSize * pageIndex;
            this.tableData = data.slice(first, end);
            this.pagination.total = data.length;
        }
        else {
            this.tableData = this.data || [];
        }
        this.initCheck();
    };
    /**
     * 获取列表数据
     * @param reset 是否重置列表
     */
    /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    HnTableComponent.prototype.getInterfaceList = /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    function (reset, param) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (param === void 0) { param = {}; }
        this.loading = true;
        /** @type {?} */
        var requestParams = __assign({ pageNo: this.pagination.pageIndex, pageSize: this.pagination.pageSize }, this.params, param);
        this.api(requestParams).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res.success) {
                /** @type {?} */
                var data_1 = res.data;
                if (data_1) {
                    _this.pagination.total = data_1[_this.totalKey];
                    _this.tableData = data_1[_this.contentKey].map((/**
                     * @param {?} item
                     * @param {?} i
                     * @return {?}
                     */
                    function (item, i) {
                        return __assign({}, item, { number: (data_1.pageNo - 1) * _this.pagination.pageSize + i + 1 });
                    }));
                    _this.initCheck();
                }
            }
            _this.loading = false;
        }));
    };
    /**
     * 初始化check
     */
    /**
     * 初始化check
     * @return {?}
     */
    HnTableComponent.prototype.initCheck = /**
     * 初始化check
     * @return {?}
     */
    function () {
        this.checkedData = this.tableData || [];
        this.checkAll(false);
    };
    /**
     * 刷新全选
     */
    /**
     * 刷新全选
     * @return {?}
     */
    HnTableComponent.prototype.refreshStatus = /**
     * 刷新全选
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllDisplayDataChecked =
            this.checkedData.length > 0
                ? this.checkedData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !item.disabled; })).every((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.mapOfCheckedId[item.id]; }))
                : false;
        this.isIndeterminate =
            this.checkedData.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.disabled; })).some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.mapOfCheckedId[item.id]; })) &&
                !this.isAllDisplayDataChecked;
        /** @type {?} */
        var checked = this.tableData.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.mapOfCheckedId[item.id]; }));
        this.numberOfChecked = checked.length;
        this.checkChange.emit(checked);
    };
    /**
     * 全选操作
     * @param value 全选值
     */
    /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    HnTableComponent.prototype.checkAll = /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.checkedData.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.disabled; })).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (_this.mapOfCheckedId[item.id] = value); }));
        this.refreshStatus();
    };
    /**
     * 清除选中
     */
    /**
     * 清除选中
     * @return {?}
     */
    HnTableComponent.prototype.clearChecked = /**
     * 清除选中
     * @return {?}
     */
    function () {
        this.checkAll(false);
    };
    HnTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-table',
                    exportAs: 'hnTable',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-table\">\n  <nz-table\n    #basicTable\n    [nzData]=\"tableData\"\n    [nzShowPagination]=\"showPagination\"\n    [nzFrontPagination]=\"false\"\n    nzShowSizeChanger\n    [nzBordered]=\"bordered\"\n    [nzScroll]=\"scroll\"\n    [nzShowTotal]=\"totalTemp\"\n    [nzTotal]=\"pagination.total\"\n    [(nzPageIndex)]=\"pagination.pageIndex\"\n    [(nzPageSize)]=\"pagination.pageSize\"\n    (nzPageIndexChange)=\"getList()\"\n    [nzFooter]=\"footer\">\n    <thead>\n      <tr>\n        <th\n          *ngIf=\"showSelect\"\n          nzLeft=\"0px\"\n          nzWidth=\"80px\"\n          nzShowCheckbox\n          [(nzChecked)]=\"isAllDisplayDataChecked\"\n          [nzIndeterminate]=\"isIndeterminate\"\n          (nzCheckedChange)=\"checkAll($event)\"></th>\n        <th\n          *ngFor=\"let item of tableColumns\"\n          [nzWidth]=\"item.width\"\n          [nzAlign]=\"item.align\"\n          [nzLeft]=\"item.left\"\n          [nzRight]=\"item.right\">\n          {{item.title}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of basicTable.data\">\n        <td\n          *ngIf=\"showSelect\"\n          nzLeft=\"0px\"\n          nzShowCheckbox\n          [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n          [nzDisabled]=\"data.disabled\"\n          (nzCheckedChange)=\"refreshStatus()\"></td>\n        <td\n          *ngFor=\"let item of tableColumns;index as index\"\n          [nzAlign]=\"item.align\"\n          [nzLeft]=\"item.left\"\n          [nzRight]=\"item.right\">\n          <span *ngIf=\"!item.render\">{{item.format ? item.format(data) : data[item.key]}}</span>\n          <ng-template [ngIf]=\"item.render\" [ngTemplateOutlet]=\"item.render\"\n            [ngTemplateOutletContext]=\"{ $implicit: {data: data, item: item}, index: index }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n    <ng-template #totalTemp>\n      <span>\u603B\u8BA1{{pagination.total}}\u6761</span>\n    </ng-template>\n  </nz-table>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    HnTableComponent.ctorParameters = function () { return []; };
    HnTableComponent.propDecorators = {
        data: [{ type: Input }],
        api: [{ type: Input }],
        params: [{ type: Input }],
        columns: [{ type: Input }],
        totalKey: [{ type: Input }],
        contentKey: [{ type: Input }],
        showSelect: [{ type: Input }],
        showPagination: [{ type: Input }],
        scroll: [{ type: Input }],
        footer: [{ type: Input }],
        bordered: [{ type: Input }],
        render: [{ type: Input }],
        checkChange: [{ type: Output }]
    };
    return HnTableComponent;
}());
if (false) {
    /** @type {?} */
    HnTableComponent.prototype.data;
    /** @type {?} */
    HnTableComponent.prototype.api;
    /** @type {?} */
    HnTableComponent.prototype.params;
    /** @type {?} */
    HnTableComponent.prototype.columns;
    /** @type {?} */
    HnTableComponent.prototype.totalKey;
    /** @type {?} */
    HnTableComponent.prototype.contentKey;
    /** @type {?} */
    HnTableComponent.prototype.showSelect;
    /** @type {?} */
    HnTableComponent.prototype.showPagination;
    /** @type {?} */
    HnTableComponent.prototype.scroll;
    /** @type {?} */
    HnTableComponent.prototype.footer;
    /** @type {?} */
    HnTableComponent.prototype.bordered;
    /** @type {?} */
    HnTableComponent.prototype.render;
    /** @type {?} */
    HnTableComponent.prototype.checkChange;
    /** @type {?} */
    HnTableComponent.prototype.isAllDisplayDataChecked;
    /** @type {?} */
    HnTableComponent.prototype.isOperating;
    /** @type {?} */
    HnTableComponent.prototype.isIndeterminate;
    /** @type {?} */
    HnTableComponent.prototype.checkedData;
    /** @type {?} */
    HnTableComponent.prototype.mapOfCheckedId;
    /** @type {?} */
    HnTableComponent.prototype.numberOfChecked;
    /** @type {?} */
    HnTableComponent.prototype.tableData;
    /** @type {?} */
    HnTableComponent.prototype.tableColumns;
    /** @type {?} */
    HnTableComponent.prototype.loading;
    /** @type {?} */
    HnTableComponent.prototype.pagination;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/hn-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnTableModule = /** @class */ (function () {
    function HnTableModule() {
    }
    HnTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgZorroModule
                    ],
                    declarations: [
                        HnTableComponent
                    ],
                    exports: [HnTableComponent]
                },] }
    ];
    return HnTableModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/hn-detail-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnDetailListComponent = /** @class */ (function () {
    function HnDetailListComponent() {
        this.detailList = [];
        this.change = new EventEmitter();
    }
    Object.defineProperty(HnDetailListComponent.prototype, "list", {
        get: /**
         * @return {?}
         */
        function () {
            return this.detailList;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this.detailList = val;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.change.emit(val);
            }), 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HnDetailListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    HnDetailListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-detail-list',
                    template: "<div class=\"hn-detail-list\">\n  <nz-col *ngFor=\"let item of list; index as index\" [nzSpan]=\"item.col || 8\" class=\"hn-detail-item\">\n    <div class=\"hn-detail-label\">{{item.label}}\uFF1A</div>\n    <div class=\"hn-detail-value\">\n      <ng-template [ngIf]=\"item.render\" [ngTemplateOutlet]=\"item.render\"\n        [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\">\n      </ng-template>\n      <span *ngIf=\"!item.render\">{{item.value}}</span>\n    </div>\n  </nz-col>\n</div>",
                    exportAs: 'hnDetailList',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    HnDetailListComponent.ctorParameters = function () { return []; };
    HnDetailListComponent.propDecorators = {
        list: [{ type: Input }],
        change: [{ type: Output }]
    };
    return HnDetailListComponent;
}());
if (false) {
    /** @type {?} */
    HnDetailListComponent.prototype.detailList;
    /** @type {?} */
    HnDetailListComponent.prototype.change;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/hn-detail-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnDetailListModule = /** @class */ (function () {
    function HnDetailListModule() {
    }
    HnDetailListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnDetailListComponent],
                    exports: [HnDetailListComponent]
                },] }
    ];
    return HnDetailListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-title/hn-detail-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnDetailTitleComponent = /** @class */ (function () {
    function HnDetailTitleComponent() {
        this.icon = 'star';
        this.theme = 'outline';
        this.title = '';
    }
    /**
     * @return {?}
     */
    HnDetailTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    HnDetailTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-detail-title',
                    exportAs: 'hnDetailTitle',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-detail-title\">\n  <i nz-icon [nzType]=\"icon\" [nzTheme]=\"theme\"></i>\n  <span class=\"title\">{{title}}</span>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnDetailTitleComponent.ctorParameters = function () { return []; };
    HnDetailTitleComponent.propDecorators = {
        icon: [{ type: Input }],
        theme: [{ type: Input }],
        title: [{ type: Input }]
    };
    return HnDetailTitleComponent;
}());
if (false) {
    /** @type {?} */
    HnDetailTitleComponent.prototype.icon;
    /** @type {?} */
    HnDetailTitleComponent.prototype.theme;
    /** @type {?} */
    HnDetailTitleComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-title/hn-detail-title.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnDetailTitleModule = /** @class */ (function () {
    function HnDetailTitleModule() {
    }
    HnDetailTitleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnDetailTitleComponent],
                    exports: [HnDetailTitleComponent]
                },] }
    ];
    return HnDetailTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-img-list/hn-img-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnImgListComponent = /** @class */ (function () {
    function HnImgListComponent() {
        this.visible = false;
        this.showIndex = 0;
        this.list = [];
    }
    /**
     * @return {?}
     */
    HnImgListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    HnImgListComponent.prototype.handleClick = /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    function (val, index) {
        this.visible = true;
        this.showIndex = index;
    };
    HnImgListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-img-list',
                    exportAs: 'hnImgList',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-img-list\">\n  <div class=\"hn-img-list-item\" *ngFor=\"let item of list; index as i\" (click)=\"handleClick(item, i)\">\n    <img [src]=\"item.url\">\n  </div>\n</div>\n\n<hn-preview [(visible)]=\"visible\" [list]=\"list\" [index]=\"showIndex\"></hn-preview>"
                }] }
    ];
    /** @nocollapse */
    HnImgListComponent.ctorParameters = function () { return []; };
    HnImgListComponent.propDecorators = {
        list: [{ type: Input }]
    };
    return HnImgListComponent;
}());
if (false) {
    /** @type {?} */
    HnImgListComponent.prototype.visible;
    /** @type {?} */
    HnImgListComponent.prototype.showIndex;
    /** @type {?} */
    HnImgListComponent.prototype.list;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-img-list/hn-img-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnImgListModule = /** @class */ (function () {
    function HnImgListModule() {
    }
    HnImgListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule, HnPreviewModule],
                    declarations: [HnImgListComponent],
                    exports: [HnImgListComponent]
                },] }
    ];
    return HnImgListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-list/hn-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnListComponent = /** @class */ (function () {
    function HnListComponent() {
        this.list = [];
    }
    /**
     * @return {?}
     */
    HnListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    HnListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-list',
                    exportAs: 'hnList',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div *ngIf=\"list.length > 0; else empty\" class=\"hn-list\">\n  <div class=\"hn-list-item\" *ngFor=\"let item of list\">\n    <div class=\"hn-list-title\">\n      <i *ngIf=\"icon\" nz-icon [iconfont]=\"icon\"></i>\n      <div class=\"title\">{{item.title}}</div>\n    </div>\n    <div class=\"hn-list-desc\">{{item.desc}}</div>\n  </div>\n</div>\n<ng-template #empty>\n  <div class=\"hn-empty\">\n    <nz-empty></nz-empty>\n  </div>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    HnListComponent.ctorParameters = function () { return []; };
    HnListComponent.propDecorators = {
        icon: [{ type: Input }],
        list: [{ type: Input }]
    };
    return HnListComponent;
}());
if (false) {
    /** @type {?} */
    HnListComponent.prototype.icon;
    /** @type {?} */
    HnListComponent.prototype.list;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-list/hn-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnListModule = /** @class */ (function () {
    function HnListModule() {
    }
    HnListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnListComponent],
                    exports: [HnListComponent]
                },] }
    ];
    return HnListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/hn-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnSearchComponent = /** @class */ (function () {
    function HnSearchComponent(fb) {
        this.fb = fb;
        this.formList = [];
        this.keyword = 'searchContent';
        this.placeholder = '请输入查询条件';
        this.search = new EventEmitter();
        this.modeVisible = false;
        this.form = {};
        this.resetForm = [];
    }
    /**
     * @return {?}
     */
    HnSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form[this.keyword] = null;
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    };
    /**
     * 初始化表单
     */
    /**
     * 初始化表单
     * @return {?}
     */
    HnSearchComponent.prototype.initForm = /**
     * 初始化表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var form = this.setInitForm(this.formList);
        this.validateForm = this.fb.group(__assign({}, form));
    };
    /**
     * 设置初始化表单数据
     * @param arr 数据
     */
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    HnSearchComponent.prototype.setInitForm = /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    function (arr) {
        var _this = this;
        /** @type {?} */
        var form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.children) {
                form = __assign({}, form, _this.setInitForm(item.children));
            }
            else {
                if (item.type === 'checkbox') {
                    form[item.key] = [Object.assign([], item.options)];
                }
                else {
                    form[item.key] = [null];
                }
            }
        }));
        return form;
    };
    /**
     * 过滤数组
     * @param data 值：数组
     */
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    HnSearchComponent.prototype.filterArr = /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    function (data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.value;
        }));
    };
    /**
     * 切换高级搜索
     */
    /**
     * 切换高级搜索
     * @return {?}
     */
    HnSearchComponent.prototype.handleToggle = /**
     * 切换高级搜索
     * @return {?}
     */
    function () {
        this.modeVisible = !this.modeVisible;
    };
    /**
     * 取消操作
     */
    /**
     * 取消操作
     * @return {?}
     */
    HnSearchComponent.prototype.handleCancle = /**
     * 取消操作
     * @return {?}
     */
    function () {
        this.modeVisible = false;
    };
    /**
     * 重置表单
     */
    /**
     * 重置表单
     * @return {?}
     */
    HnSearchComponent.prototype.handleReset = /**
     * 重置表单
     * @return {?}
     */
    function () {
        this.formList = JSON.parse(JSON.stringify(__spread(this.resetForm)));
        this.initForm();
        this.search.emit(__assign({}, this.form));
    };
    /**
     * 确认操作
     */
    /**
     * 确认操作
     * @return {?}
     */
    HnSearchComponent.prototype.handleConfirm = /**
     * 确认操作
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * 键盘enter事件
     */
    /**
     * 键盘enter事件
     * @return {?}
     */
    HnSearchComponent.prototype.handleKeyupEnter = /**
     * 键盘enter事件
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * 提交表单
     */
    /**
     * 提交表单
     * @return {?}
     */
    HnSearchComponent.prototype.submitForm = /**
     * 提交表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.validateForm.value;
        /** @type {?} */
        var params = __assign({}, this.form, this.setParams(this.formList, value));
        this.search.emit(params);
    };
    /**
     * 设置data
     * @param data 数据
     */
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    HnSearchComponent.prototype.setParams = /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    function (arr, data) {
        var _this = this;
        /** @type {?} */
        var params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.children) {
                params = __assign({}, params, _this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    var str = _this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    };
    HnSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-search',
                    exportAs: 'hnSearch',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-search\">\n  <div *ngIf=\"render\" class=\"hn-search-simple\">\n    <ng-template [ngTemplateOutlet]=\"render\">\n    </ng-template>\n  </div>\n  <div *ngIf=\"!render\" class=\"hn-search-simple\">\n    <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconSearch\">\n      <input\n        type=\"text\"\n        nz-input\n        [(ngModel)]=\"form[keyword]\"\n        maxlength=\"30\"\n        [placeholder]=\"placeholder\"\n        (keyup.enter)=\"handleKeyupEnter()\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <button nz-button nzType=\"primary\" nzSearch (click)=\"handleKeyupEnter()\">\n        <i nz-icon type=\"search\"></i>\u641C\u7D22\n      </button>\n    </ng-template>\n    <button\n      *ngIf=\"formList && formList.length > 0\"\n      nz-button\n      nzType=\"link\"\n      (click)=\"handleToggle()\">\u9AD8\u7EA7\u641C\u7D22\n      <i nz-icon [nzType]=\"modeVisible ? 'up' : 'down'\" nzTheme=\"outline\"></i>\n    </button>\n  </div>\n  <div class=\"search-popover\" *ngIf=\"modeVisible\">\n    <form class=\"search-popover-form\" nz-form nzLayout=\"horizontal\" [formGroup]=\"validateForm\">\n      <div nz-row [nzGutter]=\"20\">\n        <div nz-col [nzSpan]=\"item.col || 6\" *ngFor=\"let item of formList\">\n          <nz-form-item nzFlex>\n            <nz-form-label nzFor=\"note\">{{item.label.title || item.label}}</nz-form-label>\n            <nz-form-control style=\"flex: 1;\">\n              <input\n                *ngIf=\"item.type === 'input'\"\n                type=\"text\"\n                nz-input\n                maxlength=\"30\"\n                [formControlName]=\"item.key\" />\n              <nz-range-picker\n                *ngIf=\"item.type === 'range'\"\n                [nzDisabledDate]=\"item.disabledDate\"\n                [nzDisabledTime]=\"item.disabledTime\"\n                [formControlName]=\"item.key\"></nz-range-picker>\n              <nz-date-picker\n                *ngIf=\"item.type === 'date'\"\n                [nzDisabledDate]=\"item.disabledDate\"\n                [nzDisabledTime]=\"item.disabledTime\"\n                [formControlName]=\"item.key\"></nz-date-picker>\n              <nz-month-picker\n                *ngIf=\"item.type === 'month'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder\"></nz-month-picker>\n              <nz-year-picker\n                *ngIf=\"item.type === 'year'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder\"></nz-year-picker>\n              <nz-checkbox-group\n                *ngIf=\"item.type === 'checkbox'\"\n                [formControlName]=\"item.key\"></nz-checkbox-group>\n              <nz-select\n                *ngIf=\"item.type === 'select'\"\n                [nzAllowClear]=\"true\"\n                [formControlName]=\"item.key\">\n                <nz-option *ngFor=\"let item of item.options\" [nzValue]=\"item.value\" [nzLabel]=\"item.label\">\n                </nz-option>\n              </nz-select>\n              <nz-tree-select\n                *ngIf=\"item.type === 'tree-select'\"\n                [nzNodes]=\"item.options\"\n                nzShowSearch\n                nzCheckable\n                [formControlName]=\"item.key\">\n              </nz-tree-select>\n              <nz-cascader\n                *ngIf=\"item.type === 'cascader'\"\n                [nzOptions]=\"item.options\"\n                [nzValueProperty]=\"item.valueProperty || 'value'\"\n                [nzLabelProperty]=\"item.labelProperty || 'label'\"\n                [formControlName]=\"item.key\"\n                [nzPlaceHolder]=\"item.placeholder || '\u8BF7\u9009\u62E9'\"></nz-cascader>\n              <div *ngIf=\"item.children\" class=\"search-children\">\n                <div class=\"search-children-item\" *ngFor=\"let v of item.children\">\n                  <input\n                    *ngIf=\"v.type === 'input'\"\n                    type=\"text\"\n                    nz-input\n                    maxlength=\"30\"\n                    [formControlName]=\"v.key\" />\n                  <nz-input-number\n                    *ngIf=\"v.type === 'input-number'\"\n                    [formControlName]=\"v.key\"\n                    [nzPlaceHolder]=\"v.placeHolder\"\n                    [nzMin]=\"(v.options && v.options.min) || 1\"\n                    [nzMax]=\"(v.options && v.options.max) || 9999\"\n                    [nzStep]=\"(v.options && v.options.step) || 1\"\n                    [nzPrecision]=\"(v.options && v.options.precision) || 0.1\"></nz-input-number>\n                </div>\n              </div>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n    </form>\n    <div class=\"search-popover-btns\">\n      <button nz-button nzType=\"primary\" (click)=\"handleConfirm()\">\u641C\u7D22</button>\n      <button nz-button (click)=\"handleReset()\">\u6E05\u7A7A\u6761\u4EF6</button>\n      <button nz-button nzType=\"link\" (click)=\"handleCancle()\">\u6536\u8D77<i nz-icon nzType=\"up\" nzTheme=\"outline\"></i></button>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    HnSearchComponent.propDecorators = {
        formList: [{ type: Input }],
        keyword: [{ type: Input }],
        placeholder: [{ type: Input }],
        render: [{ type: Input }],
        search: [{ type: Output }]
    };
    return HnSearchComponent;
}());
if (false) {
    /** @type {?} */
    HnSearchComponent.prototype.formList;
    /** @type {?} */
    HnSearchComponent.prototype.keyword;
    /** @type {?} */
    HnSearchComponent.prototype.placeholder;
    /** @type {?} */
    HnSearchComponent.prototype.render;
    /** @type {?} */
    HnSearchComponent.prototype.search;
    /** @type {?} */
    HnSearchComponent.prototype.modeVisible;
    /** @type {?} */
    HnSearchComponent.prototype.form;
    /** @type {?} */
    HnSearchComponent.prototype.resetForm;
    /** @type {?} */
    HnSearchComponent.prototype.validateForm;
    /**
     * @type {?}
     * @private
     */
    HnSearchComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/hn-search.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnSearchModule = /** @class */ (function () {
    function HnSearchModule() {
    }
    HnSearchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnSearchComponent],
                    exports: [HnSearchComponent]
                },] }
    ];
    return HnSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/hn-single-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnSingleSearchComponent = /** @class */ (function () {
    function HnSingleSearchComponent(fb) {
        this.fb = fb;
        this.formList = [];
        this.style = {};
        this.search = new EventEmitter();
        this.modeVisible = false;
        this.form = {};
        this.resetForm = [];
        this.allChecked = false;
        this.indeterminate = false;
    }
    /**
     * @return {?}
     */
    HnSingleSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    };
    /**
     * 初始化表单
     */
    /**
     * 初始化表单
     * @return {?}
     */
    HnSingleSearchComponent.prototype.initForm = /**
     * 初始化表单
     * @return {?}
     */
    function () {
        this.form = this.setInitForm(this.formList);
    };
    /**
     * 设置初始化表单数据
     * @param arr 数据
     */
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setInitForm = /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    function (arr) {
        /** @type {?} */
        var form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.type === 'checkbox') {
                form[item.key] = __spread(Object.assign([], item.options));
                form[item.checkAll] = false;
                form[item.indeterminate] = false;
            }
            else {
                form[item.key] = item.value || null;
            }
        }));
        return form;
    };
    /**
     * 过滤数组
     * @param data 值：数组
     */
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    HnSingleSearchComponent.prototype.filterArr = /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    function (data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return item.value;
        }));
    };
    /**
     * picker改变
     */
    /**
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handlePickerChange = /**
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        this.submitForm();
    };
    /**
     * Input 改变
     */
    /**
     * Input 改变
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handleKeyupEnter = /**
     * Input 改变
     * @return {?}
     */
    function () {
        this.submitForm();
    };
    /**
     * checkbox改变
     */
    /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    HnSingleSearchComponent.prototype.handleCheckboxChange = /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    function ($event, data) {
        this.setCheckbox(data);
        this.submitForm();
    };
    /**
     * 全选操作
     * @param $event 值
     * @param data 数据
     */
    /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.updateAllChecked = /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    function ($event, data) {
        data.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.checked = $event;
        }));
        if (data.checkAll) {
            this.form[data.checkAll] = $event;
        }
        this.submitForm();
    };
    /**
     * 设置checkbox值
     * @param data 数据
     */
    /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setCheckbox = /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    function (data) {
        if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked; }))) {
            this.form[data.checkAll] = true;
            this.form[data.indeterminate] = false;
        }
        else if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.checked; }))) {
            this.form[data.checkAll] = false;
            this.form[data.indeterminate] = false;
        }
        else {
            this.form[data.indeterminate] = true;
        }
    };
    /**
     * 提交表单
     */
    /**
     * 提交表单
     * @return {?}
     */
    HnSingleSearchComponent.prototype.submitForm = /**
     * 提交表单
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.form;
        /** @type {?} */
        var params = __assign({}, this.setParams(this.formList, value));
        this.search.emit(params);
    };
    /**
     * 设置data
     * @param data 数据
     */
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    HnSingleSearchComponent.prototype.setParams = /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    function (arr, data) {
        var _this = this;
        /** @type {?} */
        var params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.children) {
                params = __assign({}, params, _this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    var str = _this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    };
    HnSingleSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hn-single-search',
                    exportAs: 'hnSingleSearch',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"hn-single-search\" nz-row [ngStyle]=\"style\">\n  <div class=\"hn-single-search-item\" *ngFor=\"let item of formList\">\n    <div class=\"label\">{{item.label}}\uFF1A</div>\n    <nz-input-group *ngIf=\"item.type === 'input'\" nzSearch [nzAddOnAfter]=\"suffixIconSearch\">\n      <input\n        type=\"text\"\n        nz-input\n        [(ngModel)]=\"form[item.key]\"\n        maxlength=\"30\"\n        [placeholder]=\"item.placeholder\"\n        (keyup.enter)=\"handleKeyupEnter()\" />\n    </nz-input-group>\n    <ng-template #suffixIconSearch>\n      <button nz-button nzType=\"primary\" nzSearch (click)=\"handleKeyupEnter()\">\n        <i nz-icon type=\"search\"></i>\u641C\u7D22\n      </button>\n    </ng-template>\n    <nz-month-picker\n      *ngIf=\"item.type === 'month'\"\n      [(ngModel)]=\"form[item.key]\"\n      [nzPlaceHolder]=\"item.placeholder\"\n      (ngModelChange)=\"handlePickerChange($event, item)\"></nz-month-picker>\n    <div *ngIf=\"item.type === 'checkbox'\" class=\"search-checkbox\">\n      <label\n        style=\"margin-right: 8px\"\n        nz-checkbox\n        [(ngModel)]=\"form[item.checkAll]\"\n        (ngModelChange)=\"updateAllChecked($event, item)\"\n        [nzIndeterminate]=\"form[item.indeterminate]\">\n        \u5168\u9009\n      </label>\n      <nz-checkbox-group\n        [(ngModel)]=\"form[item.key]\"\n        (ngModelChange)=\"handleCheckboxChange($event, item)\"></nz-checkbox-group>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    HnSingleSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    HnSingleSearchComponent.propDecorators = {
        formList: [{ type: Input }],
        render: [{ type: Input }],
        style: [{ type: Input }],
        search: [{ type: Output }]
    };
    return HnSingleSearchComponent;
}());
if (false) {
    /** @type {?} */
    HnSingleSearchComponent.prototype.formList;
    /** @type {?} */
    HnSingleSearchComponent.prototype.render;
    /** @type {?} */
    HnSingleSearchComponent.prototype.style;
    /** @type {?} */
    HnSingleSearchComponent.prototype.search;
    /** @type {?} */
    HnSingleSearchComponent.prototype.modeVisible;
    /** @type {?} */
    HnSingleSearchComponent.prototype.form;
    /** @type {?} */
    HnSingleSearchComponent.prototype.resetForm;
    /** @type {?} */
    HnSingleSearchComponent.prototype.allChecked;
    /** @type {?} */
    HnSingleSearchComponent.prototype.indeterminate;
    /** @type {?} */
    HnSingleSearchComponent.prototype.validateForm;
    /**
     * @type {?}
     * @private
     */
    HnSingleSearchComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/hn-single-search.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnSingleSearchModule = /** @class */ (function () {
    function HnSingleSearchModule() {
    }
    HnSingleSearchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnSingleSearchComponent],
                    exports: [HnSingleSearchComponent]
                },] }
    ];
    return HnSingleSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    HnTableMsgComponent.prototype.check;
    /** @type {?} */
    HnTableMsgComponent.prototype.total;
    /** @type {?} */
    HnTableMsgComponent.prototype.clear;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnTableMsgModule = /** @class */ (function () {
    function HnTableMsgModule() {
    }
    HnTableMsgModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgZorroModule],
                    declarations: [HnTableMsgComponent],
                    exports: [HnTableMsgComponent]
                },] }
    ];
    return HnTableMsgModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-checkbox-group/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-title/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-img-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: hn-ui.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HnUiModule = /** @class */ (function () {
    function HnUiModule() {
    }
    /**
     * @deprecated Use `HnUiModule` instead.
     */
    /**
     * @deprecated Use `HnUiModule` instead.
     * @return {?}
     */
    HnUiModule.forRoot = /**
     * @deprecated Use `HnUiModule` instead.
     * @return {?}
     */
    function () {
        return {
            ngModule: HnUiModule
        };
    };
    HnUiModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        HnCountupModule,
                        HnPreviewModule,
                        HnScrollListModule,
                        HnButtonModule,
                        HnCheckboxGroupModule,
                        HnTableModule,
                        HnDetailListModule,
                        HnDetailTitleModule,
                        HnImgListModule,
                        HnListModule,
                        HnSearchModule,
                        HnSingleSearchModule,
                        HnTableMsgModule
                    ]
                },] }
    ];
    return HnUiModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: hn-ui.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HnButtonComponent, HnButtonModule, HnCheckboxGroupComponent, HnCheckboxGroupModule, HnCountupComponent, HnCountupModule, HnDetailListComponent, HnDetailListModule, HnDetailTitleComponent, HnDetailTitleModule, HnImgListComponent, HnImgListModule, HnListComponent, HnListModule, HnPreviewComponent, HnPreviewModule, HnScrollListComponent, HnScrollListModule, HnSearchComponent, HnSearchModule, HnSingleSearchComponent, HnSingleSearchModule, HnTableComponent, HnTableModule, HnTableMsgComponent, HnTableMsgModule, HnUiModule, HnCountupModule as ɵa, HnCountupComponent as ɵb, HnTableMsgComponent as ɵba, HnPreviewModule as ɵc, NgZorroModule as ɵd, HnPreviewComponent as ɵe, HnScrollListModule as ɵf, HnScrollListComponent as ɵg, HnButtonModule as ɵh, HnButtonComponent as ɵi, HnCheckboxGroupModule as ɵj, HnCheckboxGroupComponent as ɵk, HnTableModule as ɵl, HnTableComponent as ɵm, HnDetailListModule as ɵn, HnDetailListComponent as ɵo, HnDetailTitleModule as ɵp, HnDetailTitleComponent as ɵq, HnImgListModule as ɵr, HnImgListComponent as ɵs, HnListModule as ɵt, HnListComponent as ɵu, HnSearchModule as ɵv, HnSearchComponent as ɵw, HnSingleSearchModule as ɵx, HnSingleSearchComponent as ɵy, HnTableMsgModule as ɵz };
//# sourceMappingURL=hn-ui.js.map
