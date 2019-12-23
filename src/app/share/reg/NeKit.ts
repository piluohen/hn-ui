/**
 * 提供常用的工具类
 */
export class NeKit {

  /**
   * 判断数据是否是null或者undefined
   * @param value 一个可为null的值
   */
  static isEmpty(value?: any): boolean {
    return value === undefined || value === null;
  }

  /**
   * 判断数据是否不为null或者undefined
   * @param value 一个可为null的值
   */
  static isNotEmpty(value?: any): boolean {
    return !NeKit.isEmpty(value);
  }

  /**
   * 判断数据是否是null或者undefined
   * @param value 一个可为null的值
   */
  static isBlank(value?: any): boolean {
    if (NeKit.isEmpty(value)) {
      return true;
    }

    return /^ *$/g.test(value);
  }

  /**
   * 判断数据是否不为null或者undefined
   * @param value 一个可为null的值
   */
  static isNotBlank(value?: any): boolean {
    return !NeKit.isBlank(value);
  }

  /**
   * 去除两边空格
   * @param value
   * @returns {string}
   */
  static trim(value?: any): string {
    if (NeKit.isEmpty(value)) {
      return null;
    }
    return value.toString().replace(/(^\s*)|(\s*$)/g, '');
  }

  /**
   * 对象转数组,对象为空,则返回[]
   * @param value
   * @returns {Array}
   */
  static objectToArray(value?: { [propName: string]: any }, nullValue?: boolean): { key: string, value: any }[] {
    if (!value) {
      return [];
    }
    const list = [];
    for (const key in value) {
      if (nullValue) {
        list.push({key: key, value: value[key]});
      } else if (NeKit.isNotEmpty(value[key])) {
        list.push({key: key, value: value[key]});
      }
    }
    return list;
  }

  /**
   * 转number类型,转换失败则返回默认值
   * @param num 字符串或数字
   * @param {number} defaultValue 默认值
   * @returns {number}
   */
  static toNumber(num: any, defaultValue?: number): number {
    const value = parseFloat(num);
    return isNaN(value) ? defaultValue : value;
  }

  /**
   * 转int类型,转换失败则返回默认值
   * @param num 字符串或数字
   * @param {number} defaultValue 默认值
   * @returns {number} int
   */
  static toInt(num: any, defaultValue?: number): number {
    const value = parseInt(num, 10);
    return isNaN(value) ? defaultValue : value;
  }

  /**
   * 转Date类型,转换失败则返回默认值
   * @param value
   * @param {Date} defaultValue
   * @returns {Date}
   */
  static toDate(value: any, defaultValue?: Date): Date {
    if (NeKit.isDate(value)) {
      return value;
    }
    if (NeKit.isNumber(value)) {
      return new Date(value);
    }
    if (NeKit.isString(value) && /^\d+$/g.test(value)) {
      const num = NeKit.toNumber(value);
      return num ? new Date(num) : defaultValue;
    }
    return NeKit.isEmpty(value) ? defaultValue : new Date(value);
  }

  /**
   * 转boolean类型,转换失败则返回默认值
   * @param value 字符串'true'和'false'会被解析为对应的boolean类型
   * @returns {boolean} defaultValue
   */
  static toBoolean(value: any, defaultValue?: boolean): boolean {
    if (NeKit.isEmpty(value)) {
      return defaultValue;
    }
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return true;
    }
    return !!value;
  }

  /**
   * 值是否相等
   * @param valFirst 第一个值
   * @param valSecond 第二个值
   * @returns {boolean} 是否内容相等
   */
  static equals(valFirst: any, valSecond: any): boolean {
    return valFirst == valSecond;
  }

  /**
   * 值是否不相等
   * @param valFirst 第一个值
   * @param valSecond 第二个值
   * @returns {boolean} 是否内容不相等
   */
  static notEquals(valFirst: any, valSecond: any): boolean {
    return !NeKit.equals(valFirst, valSecond);
  }

  /**
   * 严格模式是否相等,包括类型和值
   * @param valFirst 第一个值
   * @param valSecond 第二个值
   * @returns {boolean} 是否严格相等
   */
  static equalsstrict(valFirst: any, valSecond: any): boolean {
    return valFirst === valSecond;
  }

  /**
   * 是否是String
   * @param obj
   * @returns {boolean}
   */
  static isString(obj: any): boolean {
    return typeof obj === 'string';
  }

  /**
   * 是否是Array
   * @param obj
   * @returns {boolean}
   */
  static isArray(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  /**
   * 是否是Number
   * @param obj
   * @returns {boolean}
   */
  static isNumber(obj: any): boolean {
    return typeof obj === 'number';
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
   * 判断不是String
   * @param obj
   * @returns {boolean}
   */
  static isNotString(obj: any): boolean {
    return !NeKit.isString(obj);
  }

  /**
   * 判断不是Array
   * @param obj
   * @returns {boolean}
   */
  static isNotArray(obj: any): boolean {
    return !NeKit.isArray(obj);
  }

  /**
   * 判断不是Array
   * @param obj
   * @returns {boolean}
   */
  static isNotFunction(obj: any): boolean {
    return !NeKit.isFunction(obj);
  }

  /**
   * 判断不是Number
   * @param obj
   * @returns {boolean}
   */
  static isNotNumber(obj: any): boolean {
    return !NeKit.isNumber(obj);
  }

  /**
   * 是否是Date类型
   * @param obj
   * @returns {boolean}
   */
  static isDate(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Date]';
  }

  /**
   * 判断不是Date类型
   * @param obj
   * @returns {boolean}
   */
  static isNotDate(obj: any): boolean {
    return !NeKit.isDate(obj);
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
   * 根据属性路径设置值
   * @param value 对象
   * @param {string | string[]} path 属性路径
   * @param propValue 设置的属性值
   * @returns {boolean} 是否设置成功
   */
  static setValuePath(value: any, path: string | string[], propValue?: any): boolean {
    if (!value || !path) {
      return false;
    }
    if (!Array.isArray(path)) {
      path = path.split(/(\.)|(\[.+\])/);
    }
    // 查找最后一个属性的名称
    let lastProp;
    for (let i = path.length - 1; i >= 0; i--) {
      if (!path[i] || path[i] === '.') {
        path.splice(i, 1);
        continue;
      }
      if (path[i].charAt(0) === '[') {
        lastProp = path[i].match(/\w+/g)[0];
      } else {
        lastProp = path[i];
      }
      break;
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
        return false;
      }
    }
    result[lastProp] = propValue;
    return true;
  }

  /**
   * 重置日期
   * @param {Date} date
   * @param {string} format 格式可以为"yMdhms",其中的任意字符
   */
  static cleanDate(date: Date, format: string): Date {
    const fmts = format.split('');
    const methods = {y: 'setFullYear', Y: 'setFullYear', M: 'setMonth', d: 'setDate',
      h: 'setHours', H: 'setHours', m: 'setMinutes', S: 'setSeconds', s: 'setSeconds'
    };
    date.setMilliseconds(0);
    for (const char of fmts) {
      if (methods[char]) {
        date[methods[char]](0);
      }
    }
    return date;
  }

  /**
   * 对Date的扩展，将 Date 转化为指定格式的String
   * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * eg:
   * Date.format(new Date(), 'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
   * Date.format(new Date(), 'yyyy-MM-dd 星期E HH:mm:ss') ==> 2009-03-10 星期二 20:09:04
   * Date.format(new Date(), 'yyyy-MM-dd 星期e hh:mm:ss') ==> 2009-03-10 星期2 08:09:04
   * Date.format(new Date(), 'yyyy-MM-dd 第w周 hh:mm:ss') ==> 2009-03-10 第2周 08:09:04
   * Date.format(new Date(), 'yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18
   */
  static formatDate(srcDate: Date, fmt: string): string {
    if (!srcDate) {
      return '';
    }

    const week = {
      0 : '\u65e5',
      1 : '\u4e00',
      2 : '\u4e8c',
      3 : '\u4e09',
      4 : '\u56db',
      5 : '\u4e94',
      6 : '\u516d'
    };

    const o = {
      'M+' : srcDate.getMonth() + 1, // 月份
      'd+' : srcDate.getDate(), // 日
      'h+' : srcDate.getHours() % 12 === 0 ? 12 : srcDate.getHours() % 12, // 小时
      'H+' : srcDate.getHours(), // 小时
      'm+' : srcDate.getMinutes(), // 分
      's+' : srcDate.getSeconds(), // 秒
      'q+' : Math.floor((srcDate.getMonth() + 3) / 3), // 季度
      'S+' : srcDate.getMilliseconds(), // 毫秒
      'e+' : srcDate.getDay(),
      'E'  : week[srcDate.getDay()],
      'w+' : (function (date) {
        const date2 = new Date(date.getFullYear(), 0, 1);
        const day = (date2.getDay() ? date2.getDay() : 7) - (date.getDay() ? date.getDay() : 7);
        return Math.ceil(Math.round((date.getTime() - date2.getTime() + (day) * (24 * 3600000)) / 86400000) / 7) + 1;
      })(srcDate)
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (srcDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }

  /**
   * 深层拷贝
   * @param obj
   * @returns obj
   */
  static deepCopy(obj: any) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' !== typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.deepCopy(obj[attr]);
        }
      }
      return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
  }

   /**
   * 类似 `_.get`，根据 `path` 获取安全值
   * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
   *
   * @param obj 数据源，无效时直接返回 `defaultValue` 值
   * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
   * @param defaultValue 默认值
   */
  static deepGet(obj: any, path: string | string[], defaultValue?: any) {
    return NeKit.getValuePath(obj, path, defaultValue);
  }

 /**
   * 是否 展示
   * @param value 判断值
   * @param yes 为ture时显示
   * @param no 为false时显示值
   */
  static ynTransform(value: boolean, yes?: string, no?: string): string {
    if (value) {
      return '<span class="badge badge-success">' + (yes || '是') + '</span>';
    } else {
      return '<span class="badge badge-error">' + (no || '否') + '</span>';
    }
  }
}
