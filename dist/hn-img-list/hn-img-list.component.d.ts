import { OnInit } from '@angular/core';
export declare class HnImgListComponent implements OnInit {
    visible: Boolean;
    showIndex: Number;
    list: any[];
    constructor();
    ngOnInit(): void;
    handleClick(val: any, index: any): void;
}
