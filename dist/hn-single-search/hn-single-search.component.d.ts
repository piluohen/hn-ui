import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class HnSingleSearchComponent implements OnInit {
    private fb;
    formList: any;
    render: any;
    style: any;
    search: EventEmitter<any>;
    modeVisible: any;
    form: any;
    resetForm: any;
    allChecked: boolean;
    indeterminate: boolean;
    validateForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    /**
     * 初始化表单
     */
    initForm(): void;
    /**
     * 设置初始化表单数据
     * @param arr 数据
     */
    setInitForm(arr: any[]): any;
    /**
     * 过滤数组
     * @param data 值：数组
     */
    filterArr(data: any[]): any[];
    /**
     * picker改变
     */
    handlePickerChange($event: any, item: any): void;
    /**
     * Input 改变
     */
    handleKeyupEnter(): void;
    /**
     * checkbox改变
     */
    handleCheckboxChange($event: any, data: any): void;
    /**
     * 全选操作
     * @param $event 值
     * @param data 数据
     */
    updateAllChecked($event: any, data: any): void;
    /**
     * 设置checkbox值
     * @param data 数据
     */
    setCheckbox(data: any): void;
    /**
     * 提交表单
     */
    submitForm(): void;
    /**
     * 设置data
     * @param data 数据
     */
    setParams(arr: any, data: any): {};
}
