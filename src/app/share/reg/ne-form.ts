import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { NeValidator } from './ne-validator';

/**
 * 对表单的封装
 */
export class NeForm {
  readonly form: FormGroup;
  /**
   * 表单所有控件
   */
  controls: {
    [key: string]: AbstractControl;
  };

  /**
   * 表单的值
   */
  value: { [key: string]: any };
  /**
   * 存监听字段变化的Map
   * @type {{}}
   * @private
   */
  private readonly _changesMap: { [controlName: string]: Function } = {};

  constructor(private group?: FormGroup | Ctrl | Ctrl[], private _value?: any) {
    this.value = _value || {};
    if (group && group['controls']) {
      this.form = group as FormGroup;
    } else {
      this.form = new FormGroup({});
    }

    if (group && !group['controls']) {
      this.addCtrl(group as Ctrl | Ctrl[]);
    }
    this.controls = this.form.controls;
  }

  /**
   * 根据属性路径获取值
   * @param value 对象
   * @param {string | string[]} path 属性路径
   * @param defaultValue 如果从路径中未找到值返回defaultValue
   * @returns {any | null}
   */
  static getValuePath(value: any, path: string | string[], defaultValue?: any): any | null {
    if (!value || !path) {
      return defaultValue;
    }
    if (!Array.isArray(path)) {
      path = path.split(/(\.)|(\[.+\])/);
    }

    let result = value;
    for (let part of path) {
      if (!part || part === '.') {
        continue;
      }

      if (part.charAt(0) === '[') {
        part = part.match(/\w+/g)[0];
      }
      result = result[part];
      if (result == null) {
        return defaultValue;
      }
    }
    return result;
  }

  /**
   * 是否是Function
   * @param obj
   * @returns {boolean}
   */
  static isFunction(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Function]';
  }

  /**
   * 设置表单的值
   * @example
   form.setVal({first: 'Nancy'});
   console.log(form.value);   // {first: 'Nancy', last: null}
   * @param value 表单的值
   * @param options 选项
   * @returns {NeForm}
   */
  setVal(value: {
    [key: string]: any;
  } | null, options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
    emitModelToViewChange?: boolean;
    emitViewToModelChange?: boolean;
  }): NeForm {
    this.form.patchValue(value, options);
    return this;
  }

  /**
   * 获取表单的值
   * @returns {any}
   */
  getVal(): any {
    return this.form.value;
  }

  /**
   * 设置指定控件的值
   * @param {string} controlName
   * @param value 设置的值
   * @param options
   * @returns {NeForm}
   */
  setCtrlVal(controlName: string, value: any, options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
    emitModelToViewChange?: boolean;
    emitViewToModelChange?: boolean;
  }): NeForm {
    this.getCtrl(controlName).setValue(value, options);
    return this;
  }

  /**
   * 获取Control的值
   * @param {string} controlName
   * @returns {any}
   */
  getCtrlVal(controlName: string): any {
    return this.getCtrl(controlName).value;
  }

  /**
   * 获取Control
   * @param {string} controlName Control名称或AbstractControl
   * @returns {AbstractControl} AbstractControl
   */
  getCtrl(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  /**
   * 添加Control
   * @param {Ctrl | Ctrl[]} ctrls 单个或多个Ctrl
   * @returns {NeForm}
   */
  addCtrl(ctrls: Ctrl | Ctrl[]): NeForm {
    if (!Array.isArray(ctrls)) {
      ctrls = [ctrls] as Ctrl[];
    }

    for (const control of ctrls as Ctrl[]) {
      this.form.addControl(control.name, new FormControl(
        control.value || NeForm.getValuePath(this.value, control.prop || control.name), control.validator, control.asyncValidator));
      this._setModelValueCallback(control);
    }
    return this;
  }

  /**
   * 移除Control
   * @param {string} controlName 字段名称
   * @returns {NeForm} NeForm
   */
  removeCtrl(controlName: string | string[]): NeForm {
    if (!Array.isArray(controlName)) {
      controlName = [controlName];
    }
    for (const name of controlName) {
      if (this.hasCtrl(name)) {
        this.form.removeControl(name);
        delete this._changesMap[name];
      }
    }
    return this;
  }

  /**
   * 验证表单
   * @param {string} controlName 无值验证表单,有值验证字段
   * @returns {boolean}  是否验证通过
   */
  validate(controlName?: string): boolean {
    if (controlName) {
      const ctrl = this.getCtrl(controlName);
      ctrl.markAsDirty();
      ctrl.updateValueAndValidity();
      return ctrl.valid;
    }
    for (const key in this.controls) {
      this.controls[key].markAsDirty();
      this.controls[key].updateValueAndValidity();
    }
    return this.form.valid;
  }

  /**
   * 表单是否处于验证通过状态
   * @param {string} control 无值获取表单的状态,有值获取字段的状态
   * @returns {boolean} 是否处于验证通过状态
   */
  valid(control?: string): boolean {
    if (control) {
      return this.getCtrl(control).valid;
    }
    return this.form.valid;
  }

  /**
   * 表单是否处于未验证通过状态
   * @param {string} control 无值获取表单的状态,有值获取字段的状态
   * @returns {boolean} 是否处于未验证通过状态
   */
  invalid(control?: string): boolean {
    if (control) {
      return this.getCtrl(control).invalid;
    }
    return this.form.invalid;
  }

  /**
   * 设置验证器control则设置到group上
   * @param {ValidatorFn | ValidatorFn[] | null} newValidator 新验证器
   * @param {string} control 控件
   * @returns {NeForm} NeForm
   */
  setVliator(newValidator: ValidatorFn | ValidatorFn[] | null, control?: string): NeForm {
    if (control) {
      this.getCtrl(control).setValidators(newValidator);
      return this;
    }
    this.form.setValidators(newValidator);
    return this;
  }

  /**
   * 设置异步验证器control则设置到group上
   * @param {ValidatorFn | ValidatorFn[] | null} newValidator 新验证器
   * @param {string} control 控件
   * @returns {NeForm} NeForm
   */
  setAsyncVliator(newValidator: AsyncValidatorFn | AsyncValidatorFn[] | null, control?: string): NeForm {
    if (control) {
      this.getCtrl(control).setAsyncValidators(newValidator);
    } else {
      this.form.setAsyncValidators(newValidator);
    }
    return this;
  }

  /**
   * @example
   * form.setError({
   * notUnique: {message: '错误提示, 不唯一'}
   * });
   * @param {ValidationErrors | null} errors 错误信息
   * @param {boolean} emitEvent
   */
  setError(errors: ValidationErrors | null, emitEvent: boolean = true, control?: string) {
    if (control) {
      this.getCtrl(control).setErrors(errors, { emitEvent: emitEvent });
    } else {
      this.form.setErrors(errors, { emitEvent: emitEvent });
    }
    return this;
  }

  /**
   * 重置表单的值
   * @example
   * form.reset({
      first: {value: 'name', disabled: true},
      last: 'last'
    });
   * @param value 重置为表单的新值
   * @param options 选项
   * @returns {NeForm} NeForm
   */
  reset(value?: any, options?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): NeForm {
    this.form.reset(value);
    return this;
  }

  /**
   * 当组件的值改变时触发函数
   * @param {string | ((value: T) => void)} control 当为函数时直接注册到表单上,否则注册到字段
   * @param {(value: T) => void} fn 触发的回调函数
   * @returns {NeForm} NeForm
   */
  onValueChange<T>(control: string | ((value: T) => void), fn?: (value: T) => void): NeForm {
    if (NeForm.isFunction(control)) {
      this.form.valueChanges.subscribe(control as ((value: T) => void));
      return this;
    }
    (this.getCtrl(control as string) as FormControl).valueChanges.subscribe(fn);
    return this;
  }

  /**
   * 表单中是否存在字段
   * @param {string} controlName 字段名称
   * @returns {boolean} 是否存在字段
   */
  hasCtrl(controlName: string): boolean {
    return !!this.form.contains(controlName);
  }

  /**
   * 替换字段
   * @param {string | Ctrl} name 字段名称或Ctrl
   * @param {AbstractControl} control
   * @returns {NeForm}
   */
  replace(name: string | Ctrl, control?: AbstractControl): NeForm {
    if (typeof name === 'string') {
      this.form.setControl(name, control);
    } else {
      const ctrl = name as Ctrl;
      this.form.setControl(ctrl.name, new FormControl(ctrl.value, ctrl.validator, ctrl.asyncValidator));
    }
    return this;
  }

  /**
   * 获取第一个错误信息
   * @returns {string | null}
   */
  getMessage(controlName: string): string | null {
    const ctrl = this.getCtrl(controlName);
    if (ctrl) {
      return NeValidator.getErrorMessage(ctrl.errors);
    }
    return null;
  }

  /**
   * 设置值变化时的回调函数
   * @param {string} ctrl FormControl名称
   * @private
   */
  private _setModelValueCallback(ctrl: Ctrl) {
    if (!ctrl.modelToValue) {
      ctrl.modelToValue = v => v;
    }
    if (!this._changesMap[ctrl.name]) {
      this._changesMap[ctrl.name] = (new Function('val', `this.${ctrl.prop || ctrl.name} = val`)).bind(this.value);
      this.onValueChange(ctrl.name, val => {
        this._changesMap[ctrl.name](ctrl.modelToValue(val));
      });
    }
  }
}

/**
 * 单个字段信息
 */
export interface Ctrl {
  /**
   * 表单名称,但对于数组结构的name FormControl不支持
   */
  name: string;
  /**
   * 使用对象的属性名称,默认和name相同
   */
  prop?: string;
  /**
   * 表单值
   */
  value?: any;
  /**
   * 同步验证器
   */
  validator?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  /**
   * 异步验证器
   */
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;

  /**
   * 把model转换为value绑定到对象上
   * @param model model的值
   * @returns {any}
   */
  modelToValue?: (model: any) => any;
}
