import { OnInit, EventEmitter } from '@angular/core';
export declare class HnButtonComponent implements OnInit {
    type: string;
    ghost: boolean;
    loading: boolean;
    shape: string;
    size: string;
    block: boolean;
    icon: string;
    disabled: boolean;
    click: EventEmitter<any>;
    angClass: any;
    constructor();
    ngOnInit(): void;
    setClass(): void;
    /**
     * 点击事件
     */
    handleClick(): void;
}
