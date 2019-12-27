import { OnInit, EventEmitter } from '@angular/core';
export declare class HnTableMsgComponent implements OnInit {
    check: number;
    total: number;
    clear: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    handleClear(): void;
}
