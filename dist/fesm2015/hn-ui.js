import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Output, NgModule, ViewChild, forwardRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUp } from 'countup.js';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { NzIconModule, NzCarouselModule, NzModalModule, NzButtonModule, NzCheckboxModule, NzTableModule, NzInputModule, NzDatePickerModule, NzFormModule, NzGridModule, NzTimePickerModule, NzEmptyModule, NzSelectModule, NzCascaderModule, NzTreeModule, NzTreeSelectModule, NzInputNumberModule, zh_CN, NZ_I18N } from 'ng-zorro-antd';
import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { InputBoolean } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnCountupComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-countup/hn-countup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnCountupModule {
}
HnCountupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [HnCountupComponent],
                exports: [HnCountupComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ngZorro = [
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
const ɵ0 = zh_CN;
class NgZorroModule {
}
NgZorroModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule, ...ngZorro],
                declarations: [],
                providers: [{ provide: NZ_I18N, useValue: ɵ0 }],
                exports: [CommonModule, FormsModule, ReactiveFormsModule, ...ngZorro]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnPreviewComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-preview/hn-preview.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnPreviewModule {
}
HnPreviewModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnPreviewComponent],
                exports: [HnPreviewComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnScrollListComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-scroll-list/hn-scroll-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnScrollListModule {
}
HnScrollListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [HnScrollListComponent],
                exports: [HnScrollListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-button/hn-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnButtonModule {
}
HnButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnButtonComponent],
                exports: [HnButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-checkbox-group/hn-checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnCheckboxGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(elementRef, focusMonitor, cdr, renderer) {
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
        () => null);
        /**
         * touch方法
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    /**
     * 索引
     * @param {?} _index 索引值
     * @param {?} option 子项
     * @return {?}
     */
    trackByOption(_index, option) {
        return option.value;
    }
    /**
     * 写入value方法
     * @param {?} value 值
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            return;
        }
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.checked = value.includes(item.value);
        }));
        this.changeAllCheked(value);
        this.data = value;
        this.cdr.markForCheck();
    }
    /**
     * 注册change方法
     * @param {?} fn change方法
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * 注册touch事件
     * @param {?} fn touch方法
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * 设置禁用状态
     * @param {?} isDisabled 是否禁用
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    /**
     * checkbox选中值改变操作
     * @return {?}
     */
    handleChange() {
        /** @type {?} */
        const data = this.filterData(this.options);
        this.changeAllCheked(data);
        this.onChange(data);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    handleAllChecked(type) {
        this.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!item.disabled) {
                item.checked = type;
            }
        }));
        /** @type {?} */
        const data = this.filterData(this.options);
        this.onChange(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    changeAllCheked(data) {
        /** @type {?} */
        const arr = this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    filterData(data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.value;
        }));
    }
}
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
                        () => HnCheckboxGroupComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
HnCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
class HnCheckboxGroupModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table/hn-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnTableComponent {
    constructor() {
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
    ngOnInit() {
        this.tableColumns = this.columns.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.render = this.render[item.renderKey];
            return item;
        }));
        this.getList();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.params) {
            const { currentValue, firstChange } = changes.params;
            if (!firstChange) {
                this.params = currentValue;
                this.getInterfaceList(true);
            }
        }
        if (changes.data) {
            const { currentValue, firstChange } = changes.data;
            if (!firstChange) {
                this.data = currentValue;
                this.getLocalData();
            }
        }
    }
    /**
     * 获取数据
     * @param {?=} reset 是否重置列表
     * @return {?}
     */
    getList(reset = false) {
        if (reset) {
            this.pagination.pageIndex = 1;
        }
        if (this.api && this.data.length === 0) {
            this.getInterfaceList();
        }
        else {
            this.getLocalData();
        }
    }
    /**
     * 获取本地传入数据
     * @return {?}
     */
    getLocalData() {
        if (this.showPagination) {
            const { pageSize, pageIndex } = this.pagination;
            /** @type {?} */
            const data = [...this.data];
            /** @type {?} */
            const first = pageSize * (pageIndex - 1);
            /** @type {?} */
            const end = pageSize * pageIndex;
            this.tableData = data.slice(first, end);
            this.pagination.total = data.length;
        }
        else {
            this.tableData = this.data || [];
        }
        this.initCheck();
    }
    /**
     * 获取列表数据
     * @param {?=} reset 是否重置列表
     * @param {?=} param
     * @return {?}
     */
    getInterfaceList(reset = false, param = {}) {
        this.loading = true;
        /** @type {?} */
        const requestParams = Object.assign({ pageNo: this.pagination.pageIndex, pageSize: this.pagination.pageSize }, this.params, param);
        this.api(requestParams).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res.success) {
                /** @type {?} */
                const data = res.data;
                if (data) {
                    this.pagination.total = data[this.totalKey];
                    this.tableData = data[this.contentKey].map((/**
                     * @param {?} item
                     * @param {?} i
                     * @return {?}
                     */
                    (item, i) => {
                        return Object.assign({}, item, { number: (data.pageNo - 1) * this.pagination.pageSize + i + 1 });
                    }));
                    this.initCheck();
                }
            }
            this.loading = false;
        }));
    }
    /**
     * 初始化check
     * @return {?}
     */
    initCheck() {
        this.checkedData = this.tableData || [];
        this.checkAll(false);
    }
    /**
     * 刷新全选
     * @return {?}
     */
    refreshStatus() {
        this.isAllDisplayDataChecked =
            this.checkedData.length > 0
                ? this.checkedData.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => !item.disabled)).every((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => this.mapOfCheckedId[item.id]))
                : false;
        this.isIndeterminate =
            this.checkedData.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !item.disabled)).some((/**
             * @param {?} item
             * @return {?}
             */
            item => this.mapOfCheckedId[item.id])) &&
                !this.isAllDisplayDataChecked;
        /** @type {?} */
        const checked = this.tableData.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => this.mapOfCheckedId[item.id]));
        this.numberOfChecked = checked.length;
        this.checkChange.emit(checked);
    }
    /**
     * 全选操作
     * @param {?} value 全选值
     * @return {?}
     */
    checkAll(value) {
        this.checkedData.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.disabled)).forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (this.mapOfCheckedId[item.id] = value)));
        this.refreshStatus();
    }
    /**
     * 清除选中
     * @return {?}
     */
    clearChecked() {
        this.checkAll(false);
    }
}
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
HnTableComponent.ctorParameters = () => [];
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
class HnTableModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-list/hn-detail-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnDetailListComponent {
    constructor() {
        this.detailList = [];
        this.change = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set list(val) {
        this.detailList = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.change.emit(val);
        }), 0);
    }
    /**
     * @return {?}
     */
    get list() {
        return this.detailList;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
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
HnDetailListComponent.ctorParameters = () => [];
HnDetailListComponent.propDecorators = {
    list: [{ type: Input }],
    change: [{ type: Output }]
};
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
class HnDetailListModule {
}
HnDetailListModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnDetailListComponent],
                exports: [HnDetailListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-detail-title/hn-detail-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnDetailTitleComponent {
    constructor() {
        this.icon = 'star';
        this.theme = 'outline';
        this.title = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
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
HnDetailTitleComponent.ctorParameters = () => [];
HnDetailTitleComponent.propDecorators = {
    icon: [{ type: Input }],
    theme: [{ type: Input }],
    title: [{ type: Input }]
};
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
class HnDetailTitleModule {
}
HnDetailTitleModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnDetailTitleComponent],
                exports: [HnDetailTitleComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-img-list/hn-img-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnImgListComponent {
    constructor() {
        this.visible = false;
        this.showIndex = 0;
        this.list = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    handleClick(val, index) {
        this.visible = true;
        this.showIndex = index;
    }
}
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
HnImgListComponent.ctorParameters = () => [];
HnImgListComponent.propDecorators = {
    list: [{ type: Input }]
};
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
class HnImgListModule {
}
HnImgListModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule, HnPreviewModule],
                declarations: [HnImgListComponent],
                exports: [HnImgListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-list/hn-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnListComponent {
    constructor() {
        this.list = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
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
HnListComponent.ctorParameters = () => [];
HnListComponent.propDecorators = {
    icon: [{ type: Input }],
    list: [{ type: Input }]
};
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
class HnListModule {
}
HnListModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnListComponent],
                exports: [HnListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-search/hn-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnSearchComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        this.form[this.keyword] = null;
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    }
    /**
     * 初始化表单
     * @return {?}
     */
    initForm() {
        /** @type {?} */
        const form = this.setInitForm(this.formList);
        this.validateForm = this.fb.group(Object.assign({}, form));
    }
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    setInitForm(arr) {
        /** @type {?} */
        let form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.children) {
                form = Object.assign({}, form, this.setInitForm(item.children));
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
    }
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    filterArr(data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.value;
        }));
    }
    /**
     * 切换高级搜索
     * @return {?}
     */
    handleToggle() {
        this.modeVisible = !this.modeVisible;
    }
    /**
     * 取消操作
     * @return {?}
     */
    handleCancle() {
        this.modeVisible = false;
    }
    /**
     * 重置表单
     * @return {?}
     */
    handleReset() {
        this.formList = JSON.parse(JSON.stringify([...this.resetForm]));
        this.initForm();
        this.search.emit(Object.assign({}, this.form));
    }
    /**
     * 确认操作
     * @return {?}
     */
    handleConfirm() {
        this.submitForm();
    }
    /**
     * 键盘enter事件
     * @return {?}
     */
    handleKeyupEnter() {
        this.submitForm();
    }
    /**
     * 提交表单
     * @return {?}
     */
    submitForm() {
        /** @type {?} */
        const value = this.validateForm.value;
        /** @type {?} */
        const params = Object.assign({}, this.form, this.setParams(this.formList, value));
        this.search.emit(params);
    }
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    setParams(arr, data) {
        /** @type {?} */
        let params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.children) {
                params = Object.assign({}, params, this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    const str = this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    }
}
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
HnSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
HnSearchComponent.propDecorators = {
    formList: [{ type: Input }],
    keyword: [{ type: Input }],
    placeholder: [{ type: Input }],
    render: [{ type: Input }],
    search: [{ type: Output }]
};
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
class HnSearchModule {
}
HnSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnSearchComponent],
                exports: [HnSearchComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-single-search/hn-single-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnSingleSearchComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        this.resetForm = JSON.parse(JSON.stringify(this.formList));
        this.initForm();
    }
    /**
     * 初始化表单
     * @return {?}
     */
    initForm() {
        this.form = this.setInitForm(this.formList);
    }
    /**
     * 设置初始化表单数据
     * @param {?} arr 数据
     * @return {?}
     */
    setInitForm(arr) {
        /** @type {?} */
        const form = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.type === 'checkbox') {
                form[item.key] = [...Object.assign([], item.options)];
                form[item.checkAll] = false;
                form[item.indeterminate] = false;
            }
            else {
                form[item.key] = item.value || null;
            }
        }));
        return form;
    }
    /**
     * 过滤数组
     * @param {?} data 值：数组
     * @return {?}
     */
    filterArr(data) {
        return data
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.checked;
        }))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item.value;
        }));
    }
    /**
     * picker改变
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    handlePickerChange($event, item) {
        this.submitForm();
    }
    /**
     * Input 改变
     * @return {?}
     */
    handleKeyupEnter() {
        this.submitForm();
    }
    /**
     * checkbox改变
     * @param {?} $event
     * @param {?} data
     * @return {?}
     */
    handleCheckboxChange($event, data) {
        this.setCheckbox(data);
        this.submitForm();
    }
    /**
     * 全选操作
     * @param {?} $event 值
     * @param {?} data 数据
     * @return {?}
     */
    updateAllChecked($event, data) {
        data.options.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            item.checked = $event;
        }));
        if (data.checkAll) {
            this.form[data.checkAll] = $event;
        }
        this.submitForm();
    }
    /**
     * 设置checkbox值
     * @param {?} data 数据
     * @return {?}
     */
    setCheckbox(data) {
        if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked))) {
            this.form[data.checkAll] = true;
            this.form[data.indeterminate] = false;
        }
        else if (data.options.every((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.checked))) {
            this.form[data.checkAll] = false;
            this.form[data.indeterminate] = false;
        }
        else {
            this.form[data.indeterminate] = true;
        }
    }
    /**
     * 提交表单
     * @return {?}
     */
    submitForm() {
        /** @type {?} */
        const value = this.form;
        /** @type {?} */
        const params = Object.assign({}, this.setParams(this.formList, value));
        this.search.emit(params);
    }
    /**
     * 设置data
     * @param {?} arr
     * @param {?} data 数据
     * @return {?}
     */
    setParams(arr, data) {
        /** @type {?} */
        let params = {};
        arr.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.children) {
                params = Object.assign({}, params, this.setParams(item.children, data));
            }
            else {
                if (item.type === 'checkbox') {
                    /** @type {?} */
                    const str = this.filterArr(data[item.key]).join(',') || null;
                    params[item.key] = str;
                }
                else {
                    params[item.key] = data[item.key];
                }
            }
        }));
        return params;
    }
}
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
HnSingleSearchComponent.ctorParameters = () => [
    { type: FormBuilder }
];
HnSingleSearchComponent.propDecorators = {
    formList: [{ type: Input }],
    render: [{ type: Input }],
    style: [{ type: Input }],
    search: [{ type: Output }]
};
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
class HnSingleSearchModule {
}
HnSingleSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnSingleSearchComponent],
                exports: [HnSingleSearchComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnTableMsgComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-table-msg/hn-table-msg.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HnTableMsgModule {
}
HnTableMsgModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgZorroModule],
                declarations: [HnTableMsgComponent],
                exports: [HnTableMsgComponent]
            },] }
];

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
class HnUiModule {
    /**
     * @deprecated Use `HnUiModule` instead.
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: HnUiModule
        };
    }
}
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

/**
 * @fileoverview added by tsickle
 * Generated from: hn-ui.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HnButtonComponent, HnButtonModule, HnCheckboxGroupComponent, HnCheckboxGroupModule, HnCountupComponent, HnCountupModule, HnDetailListComponent, HnDetailListModule, HnDetailTitleComponent, HnDetailTitleModule, HnImgListComponent, HnImgListModule, HnListComponent, HnListModule, HnPreviewComponent, HnPreviewModule, HnScrollListComponent, HnScrollListModule, HnSearchComponent, HnSearchModule, HnSingleSearchComponent, HnSingleSearchModule, HnTableComponent, HnTableModule, HnTableMsgComponent, HnTableMsgModule, HnUiModule, HnCountupModule as ɵa, HnCountupComponent as ɵb, HnTableMsgComponent as ɵba, HnPreviewModule as ɵc, NgZorroModule as ɵd, HnPreviewComponent as ɵe, HnScrollListModule as ɵf, HnScrollListComponent as ɵg, HnButtonModule as ɵh, HnButtonComponent as ɵi, HnCheckboxGroupModule as ɵj, HnCheckboxGroupComponent as ɵk, HnTableModule as ɵl, HnTableComponent as ɵm, HnDetailListModule as ɵn, HnDetailListComponent as ɵo, HnDetailTitleModule as ɵp, HnDetailTitleComponent as ɵq, HnImgListModule as ɵr, HnImgListComponent as ɵs, HnListModule as ɵt, HnListComponent as ɵu, HnSearchModule as ɵv, HnSearchComponent as ɵw, HnSingleSearchModule as ɵx, HnSingleSearchComponent as ɵy, HnTableMsgModule as ɵz };
//# sourceMappingURL=hn-ui.js.map
