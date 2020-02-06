import { FocusMonitor } from '@angular/cdk/a11y';
import {
  forwardRef,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputBoolean } from 'ng-zorro-antd/core';

@Component({
  selector: 'hn-checkbox-group',
  templateUrl: './hn-checkbox-group.component.html',
  exportAs: 'hnCheckboxGroup',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HnCheckboxGroupComponent),
      multi: true
    }
  ]
})
export class HnCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() options: any[] = [];

  @Input() @InputBoolean() hnDisabled = false;

  @Input() @InputBoolean() checkAll = false;

  @Input() checkAllLabel = '全选';

  data: any[] = [];

  allChecked = false;

  indeterminate = false;

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    renderer: Renderer2
  ) {
    renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
  }

  ngOnInit(): void {
    this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }

  /**
   * change方法
   */
  onChange: (value: any) => void = () => null;

  /**
   * touch方法
   */
  onTouched: () => any = () => null;

  /**
   * 索引
   * @param _index 索引值
   * @param option 子项
   */
  trackByOption(_index: number, option: any): string {
    return option.value;
  }

  /**
   * 写入value方法
   * @param value 值
   */
  writeValue(value: any): void {
    if (!value || value.length === 0) {
      value = [];
    }

    this.options.forEach(item => {
      item.checked = value.includes(item.value);
    });
    this.changeAllCheked(value);
    this.data = value;
    this.cdr.markForCheck();
  }

  /**
   * 注册change方法
   * @param fn change方法
   */
  registerOnChange(fn: (_: any[]) => {}): void {
    this.onChange = fn;
  }

  /**
   * 注册touch事件
   * @param fn touch方法
   */
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * 设置禁用状态
   * @param isDisabled 是否禁用
   */
  setDisabledState(isDisabled: boolean): void {
    this.hnDisabled = isDisabled;
    this.cdr.markForCheck();
  }

  /**
   * checkbox选中值改变操作
   */
  handleChange(): void {
    const data = this.filterData(this.options);

    this.changeAllCheked(data);
    this.onChange(data);
  }

  handleAllChecked(type: any): void {
    this.options.forEach(item => {
      if (!item.disabled) {
        item.checked = type;
      }
    });
    const data = this.filterData(this.options);
    this.onChange(data);
  }

  changeAllCheked(data: any[]): void {
    const arr = this.options.filter(item => {
      return !item.disabled || (item.disabled && item.checked);
    });
    if (data.length === arr.length) {
      this.allChecked = true;
      this.indeterminate = false;
    } else if (data.length === 0) {
      this.allChecked = false;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  filterData(data: any[]) {
    return data
      .filter(item => {
        return item.checked;
      })
      .map(item => {
        return item.value;
      });
  }
}
