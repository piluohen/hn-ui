import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NeKit } from './NeKit';

/**
 * Created by mdc on 2017/1/14.
 * 扩展表单验证规则
 */
export class NeValidator {

  /**
   * Validator that requires controls to have a non-empty value.
   */
  static required(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return (value == null || value.length === 0) ? { 'required': { message: '不能为空', value: value } } : null;
  }

  /**
   * Validator that performs email validation.
   */
  static email(control: AbstractControl): ValidationErrors | null {
    return Validators.email(control) ? { email: { message: '邮箱格式错误' } } : null;
  }

  /**
   * 通过正则表达式验证
   */
  static pattern(pattern?: string | RegExp, message?: string): ValidatorFn {
    if (!pattern) {
      return Validators.nullValidator;
    }

    let regex;
    let regexStr;

    if (typeof pattern === 'string') {
      regexStr = pattern;
      regex = new RegExp(regexStr);
    } else {
      regexStr = pattern.toString();
      regex = pattern;
    }

    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value == null || control.value.length === 0) {
        return null;
      }

      if (regex.test(control.value)) {
        return null;
      }
      return { pattern: { requiredPattern: regexStr, value: control.value, message: message || '请输入正确格式的字符' } };
    };
  }

  /**
   * 验证数字
   * @param control
   */
  static digits(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^\d+$/.test(control.value);
    return result ? null : { digits: { value: control.value, message: '请输入数字' } };
  }

  /**
   * 身份证号码
   * @param control
   */
  static idCard(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(control.value);
    return result ? null : { idCard: { value: control.value, message: '请输入二代身份证号' } };
  }

  /**
   * 中文
   * @param control
   */
  static chinese(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^[\u0391-\uFFE5]+$/.test(control.value);
    return result ? null : { chinese: { value: control.value, message: '请输入中文字符' } };
  }

  /**
   * 手机号
   * @param control
   */
  static mobile(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^1[3-9]\d{9}$/.test(control.value);
    return result ? null : { mobile: { value: control.value, message: '请输入有效的手机号' } };
  }

  /**
   * 固话
   * @param control
   */
  static tel(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/.test(control.value);
    return result ? null : { tel: { value: control.value, message: '请输入有效的电话号码' } };
  }

  /**
   * 手机号跟固话
   * @param control
   */
  static phone(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/.test(control.value)
      || /^1[3-9]\d{9}$/.test(control.value);
    return result ? null : { tel: { value: control.value, message: '请输入有效的电话号码' } };
  }

  /**
   * url
   * @param control
   */
  static url(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) { return null; }

    const result = /^(https?|s?ftp):\/\/\S+$/i.test(control.value);
    return result ? null : { url: { value: control.value, message: '请输入有效的网址' } };
  }
  /**
   * 邮编
   * @param control
   */
  static zipcode(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value.length === 0) {
      return null;
    }

    const result = /^\d{6}$/.test(control.value);
    return result ? null : { zipcode: { value: control.value, message: '请检查邮政编码格式' } };
  }

  /**
   * '*': "请输入整数",
   '+': "请输入正整数",
   '+0': "请输入正整数或0",
   '-': "请输入负整数",
   '-0': "请输入负整数或0"
   @example:
   integer()
   integer('+')
   integer('+0')
   integer('-')
   integer('-0')
   * @param params
   *
   */
  static integer(params?: string): ValidatorFn {
    let reg: string;
    let message: string;
    const z = '0|',
      p = '[1-9]\\d*',
      key: string = params ? params : '*';

    switch (key) {
      case '+':
        reg = p;
        message = '请输入正整数';
        break;
      case '-':
        reg = '-' + p;
        message = '请输入负整数';
        break;
      case '+0':
        reg = z + p;
        message = '请输入正整数或0';
        break;
      case '-0':
        reg = z + '-' + p;
        message = '请输入负整数或0';
        break;
      default:
        reg = z + '-?' + p;
        message = '请输入整数';
    }
    const regExp = new RegExp(`^(?:${reg})$`);

    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value == null || value.length === 0) {
        return null;
      }
      return regExp.test(value) ? null : { integer: { value: value, message: message } };
    };
  }

  /**
   * range numbers
   * @example:
   range[0~99]    Number 0-99
   range[0~]      Number greater than or equal to 0
   range[~100]    Number less than or equal to 100
   * @param params
   * @returns {boolean}
   */
  static range(params?: string | number): ValidatorFn {
    if (!params) {
      return Validators.nullValidator;
    }

    const p = params.toString().split('~'),
      a = p[0],
      b = p[1];
    let message: string;
    let c = 'rg';

    return (control: AbstractControl): { [key: string]: any } => {
      let value = control.value;
      if (value == null || value.length === 0) {
        return null;
      }
      value = +value;

      const isNumber = typeof value === 'number';

      if (p.length === 2) {
        if (a && b) {
          if (isNumber && value >= +a && value <= +b) {
            return null;
          }
          message = `请输入${a}到${b}的数`;

        } else if (a && !b) {
          if (isNumber && value >= +a) {
            return null;
          }
          c = 'gte';
          message = `请输入不小于${a}的数`;

        } else if (!a && b) {
          if (isNumber && value <= +b) {
            return null;
          }
          c = 'lte';
          message = `请输入最大${a}的数`;
        }
      } else {
        if (value === +a) {
          return null;
        }
        message = `请输入数字${a}`;
      }

      return { 'range': { value: control.value, message: message, type: c } };
    };
  }

  /**
   * 校验字符的长度
   * @example:
   vlength[6~16]        6-16 characters
   vlength[6~]          Greater than 6 characters
   vlength[~16]         Less than 16 characters
   vlength[~16, true]   Less than 16 characters, non-ASCII characters calculating two-character
   **/
  static vlength(params?: string | number): ValidatorFn {
    if (!params) {
      return Validators.nullValidator;
    }

    const p = params.toString().split('~'),
      a = p[0],
      b = p[1];
    let c = 'rg', message: string;

    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value == null || value.length === 0) {
        return null;
      }

      const length = value === null || value === undefined ? 0 : value.toString().length;

      if (p.length === 2) {
        if (a && b) {
          if (length >= +a && length <= +b) {
            return null;
          }
          message = `请输入${a}到${b}个字符`;

        } else if (a && !b) {
          if (length >= +a) {
            return null;
          }
          c = 'gte';
          message = `请至少输入${a}个字符`;

        } else if (!a && b) {
          if (length <= +b) {
            return null;
          }
          c = 'lte';
          message = `请最多输入${b}个字符`;
        }
      } else {
        if (length === +a) {
          return null;
        }
        message = `请输入${a}个字符`;
      }

      return { 'vlength': { value: value, length: length, message: message, type: c } };
    };
  }

  /**
   * 和另一个组件的值比较
   * @param {FormGroup} validateForm 表单
   * @param {string} termType 比较符
   * @param {string} toFieldName 要比较的字段名
   * @param {string} message 错误提示信息
   * @returns {ValidatorFn}
   */
  static compareTo(validateForm: FormGroup, termType: string, toFieldName: string, message?: string): ValidatorFn {

    const comparator = {
      '=': (v1, v2) => NeKit.equals(v1, v2),
      '>': (v1, v2) => v1 > v2,
      '>=': (v1, v2) => v1 >= v2,
      '<': (v1, v2) => v1 < v2,
      '<=': (v1, v2) => v1 <= v2,
      '!=': (v1, v2) => v1 !== v2,
    }[termType];

    const termMsg = {
      '=': '等于',
      '>': '大于',
      '>=': '大于等于',
      '<': '小于',
      '<=': '小于等于',
      '!=': '不等于'
    }[termType];

    return (control: AbstractControl): { [key: string]: any } => {
      const ctrl: AbstractControl = validateForm.controls[toFieldName];
      if (!ctrl || !comparator) {
        return null;
      }

      if (comparator(control.value, ctrl.value)) {
        if (ctrl.invalid) {
          ctrl.updateValueAndValidity();
        }
        return null;
      }

      return { term: { value: control.value, message: message || `必须${termMsg}${ctrl.value}` } };
    };
  }

  /**
   * range numbers
   * @example:
   range[0~99]    Number 0-99
   range[0~]      Number greater than or equal to 0
   range[~100]    Number less than or equal to 100
   * @param params
   * @returns {boolean}
   *
   */
  static integerInput(params?: string | number): ValidatorFn {
    if (!params) { return Validators.nullValidator; }
    let reg: string;
    const ps = '\\d';

    const p = params.toString().split('~'),
      a = p[0],
      b = p[1],
      c = 'rg';
    let message: string;

    if (p.length === 2) {
      if (a && b) {
        reg = ps + `{${a},${b}}`;
        message = `请输入${a}到${b}位数字`;
      } else if (a && !b) {
        reg = ps + `{${a},}`;
        message = `请输入不少于${a}的数字`;
      } else if (!a && b) {
        reg = ps + `{0,${b}}`;
        message = `请输入最多${b}位数字`;
      }
    } else {
      reg = ps + `{${a}}`;
      message = `请输入${a}位数字`;
    }
    const regExp = new RegExp(`^(?:${reg})$`);

    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value == null || value.length === 0) { return null; }
      return regExp.test(value) ? null : { integer: { value: value, message: message } };
    };
  }

  /**
   * 从ValidationErrors获取第一个错误信息
   * @param {ValidationErrors | null} errors 错误对象
   * @param {string} errorProperty 错误信息的属性
   * @returns {string} 错误信息描述
   */
  static getErrorMessage(errors: ValidationErrors | null, errorProperty?: string): string {
    if (!errors) {
      return '';
    }
    errorProperty = errorProperty || 'message';
    for (const key in errors) {
      if (errors[key]) {
        return NeKit.isString(errors[key]) ? errors[key] : errors[key][errorProperty];
      }
    }
  }
}
