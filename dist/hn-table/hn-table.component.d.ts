import { OnInit, EventEmitter, OnChanges } from '@angular/core';
export declare class HnTableComponent implements OnInit, OnChanges {
    data: any[];
    api: any;
    params: any;
    columns: any[];
    totalKey: any;
    contentKey: any;
    showSelect: boolean;
    showPagination: boolean;
    scroll: any;
    footer: any;
    bordered: boolean;
    render: any;
    checkChange: EventEmitter<any>;
    isAllDisplayDataChecked: boolean;
    isOperating: boolean;
    isIndeterminate: boolean;
    checkedData: any[];
    mapOfCheckedId: {
        [key: string]: boolean;
    };
    numberOfChecked: number;
    tableData: any[];
    tableColumns: any[];
    loading: boolean;
    pagination: {
        total: number;
        pageSize: number;
        pageIndex: number;
    };
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    /**
     * 获取数据
     * @param reset 是否重置列表
     */
    getList(reset?: boolean): void;
    /**
     * 获取本地传入数据
     * @param data 本地数据
     */
    getLocalData(): void;
    /**
     * 获取列表数据
     * @param reset 是否重置列表
     */
    getInterfaceList(reset?: boolean, param?: any): void;
    /**
     * 初始化check
     */
    initCheck(): void;
    /**
     * 刷新全选
     */
    refreshStatus(): void;
    /**
     * 全选操作
     * @param value 全选值
     */
    checkAll(value: boolean): void;
    /**
     * 清除选中
     */
    clearChecked(): void;
}
