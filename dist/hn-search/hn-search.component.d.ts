import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class HnSearchComponent implements OnInit {
    private fb;
    formList: any;
    keyword: string;
    placeholder: string;
    render: any;
    search: EventEmitter<any>;
    modeVisible: any;
    form: any;
    resetForm: any;
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
    setInitForm(arr: any): any;
    /**
     * 过滤数组
     * @param data 值：数组
     */
    filterArr(data: any[]): any[];
    /**
     * 切换高级搜索
     */
    handleToggle(): void;
    /**
     * 取消操作
     */
    handleCancle(): void;
    /**
     * 重置表单
     */
    handleReset(): void;
    /**
     * 确认操作
     */
    handleConfirm(): void;
    /**
     * 键盘enter事件
     */
    handleKeyupEnter(): void;
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
