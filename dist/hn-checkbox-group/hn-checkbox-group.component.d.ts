import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class HnCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private focusMonitor;
    private cdr;
    options: any[];
    disabled: boolean;
    checkAll: boolean;
    checkAllLabel: string;
    data: any[];
    allChecked: boolean;
    indeterminate: boolean;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * change方法
     */
    onChange: (value: any) => void;
    /**
     * touch方法
     */
    onTouched: () => any;
    /**
     * 索引
     * @param _index 索引值
     * @param option 子项
     */
    trackByOption(_index: number, option: any): string;
    /**
     * 写入value方法
     * @param value 值
     */
    writeValue(value: any): void;
    /**
     * 注册change方法
     * @param fn change方法
     */
    registerOnChange(fn: (_: any[]) => {}): void;
    /**
     * 注册touch事件
     * @param fn touch方法
     */
    registerOnTouched(fn: () => {}): void;
    /**
     * 设置禁用状态
     * @param isDisabled 是否禁用
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * checkbox选中值改变操作
     */
    handleChange(): void;
    handleAllChecked(type: any): void;
    changeAllCheked(data: any[]): void;
    filterData(data: any[]): any[];
}
