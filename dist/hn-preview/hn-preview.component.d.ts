import { OnInit, EventEmitter } from '@angular/core';
export declare class HnPreviewComponent implements OnInit {
    modeVisible: boolean;
    carousel: any;
    list: any;
    index: number;
    visible: boolean;
    visibleChange: EventEmitter<any>;
    imgList: any[];
    constructor();
    ngOnInit(): void;
    /**
     * 打开弹框，赋值
     */
    handleAfterOpen(): void;
    /**
     * 关闭弹框
     */
    handleCancel(): void;
    /**
     * 上一张操作
     */
    handlePrev(): void;
    /**
     * 下一张操作
     */
    handleNext(): void;
    /**
     * 跳转到第index张
     * @param index 索引值
     */
    handleGoToIndex(index: number): void;
}
