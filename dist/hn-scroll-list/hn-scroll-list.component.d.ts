import { OnInit, EventEmitter, TemplateRef } from '@angular/core';
export declare class HnScrollListComponent implements OnInit {
    data: any[];
    count: number;
    scrollCount: number;
    itemHeight: number;
    speed: number;
    delay: number;
    renderItem: TemplateRef<void>;
    click: EventEmitter<any>;
    y: number;
    curr: number;
    list: any;
    nextList: any;
    totalList: any;
    inAnimation: boolean;
    inEnter: boolean;
    initContentStyle: {
        transition: string;
        marginTop: string;
    };
    contentStyle: {};
    contentHeight: any;
    scrollHeight: any;
    listStyle: any;
    itemStyle: any;
    timer: any;
    constructor();
    ngOnInit(): void;
    initData(): void;
    /**
     * 重置滚动
     */
    reset(): void;
    /**
     * 鼠标over操作
     */
    handleMouseover(): void;
    /**
     * 鼠标移出操作
     */
    handleMouseout(): void;
    /**
     * 动画结束
     */
    handleEnd(): void;
    /**
     * 滚动动画
     */
    loop(): void;
    /**
     * 清除滚动
     */
    clearScroll(): void;
    /**
     * 获取列表
     */
    getList(): void;
    /**
     * 获取下部分列表
     */
    getNextList(): void;
    /**
     * 点击滚动项
     * @param row 滚动项数据
     */
    handleClick(row: any): void;
}
