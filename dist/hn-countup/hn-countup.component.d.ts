import { OnInit, OnChanges, ElementRef, EventEmitter } from '@angular/core';
export declare class HnCountupComponent implements OnInit, OnChanges {
    private el;
    instance: any;
    startVal: number;
    endVal: number;
    duration: number;
    decimalPlaces: number;
    ready: EventEmitter<any>;
    delay: number;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestory(): void;
    create(): void;
}
