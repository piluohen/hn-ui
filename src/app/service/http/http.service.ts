import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Utils } from 'src/app/share/util/utils';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';
import { RequestOptionsArgs } from '@angular/http';

/**
 * http服务
 */
@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  private static METHOD_DELETE = 'DELETE';
  private static METHOD_POST = 'POST';
  private static METHOD_GET = 'GET';
  private static METHOD_PUT = 'PUT';
  private static METHOD_PATCH = 'PATCH';
  private header = {
    // 'id': '60',
    // 'username': '1566983940',
    // 'orgId': '64'
  };

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): any {
    const params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (const key of Object.keys(paramMap)) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * GET 方法
   * @param {string} url
   * @param paramMap
   * @returns {Observable<{}>}
   */
  public get(url: string, paramMap: any = null): Observable<{}> {
    const options = {
      params: paramMap,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId(),
        ...this.header
      })
    };
    // 增加时间戳，防止被浏览器请求缓存
    const timestamp = new Date().getTime();
    if (url.indexOf('?') !== -1) {
      url += '&_timestamp=' + timestamp;
    } else {
      url += '?_timestamp=' + timestamp;
    }
    return this.http.request(HttpService.METHOD_GET, url, options);
  }

  /**
   * GET 方法获取文件 pengfei
   * @param {string} url
   * @param paramMap
   * @returns {Observable<{}>}
   */
  public getFile(url: string, paramMap: any = null): Observable<{}> {
    const options = {
      // params: HttpService.buildURLSearchParams(paramMap),
      params: paramMap,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId()
      }),
      responseType: 'arraybuffer' as 'arraybuffer'
    };

    // 增加时间戳，防止被浏览器请求缓存
    const timestamp = new Date().getTime();
    if (url.indexOf('?') !== -1) {
      url += '&_timestamp=' + timestamp;
      console.log(url);
    } else {
      url += '?_timestamp=' + timestamp;
      console.log(url);
    }
    return this.http.request(HttpService.METHOD_GET, url, options);
  }

  /**
   * PATCH 方法 pengfei
   * @param {string} url
   * @param paramMap
   * @returns {Observable<{}>}
   */
  public patch(url: string, body: any = null): Observable<{}> {
    const options = {
      // params: HttpService.buildURLSearchParams(paramMap),
      body: body ? body : null,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId()
      })
    };
    return this.http.request(HttpService.METHOD_PATCH, url, options);
  }

  /**
   * POST 方法
   * @param {string} url
   * @param body
   * @returns {Observable<{}>}
   */
  public post(url: string, body: any = null): Observable<{}> {
    const options = {
      body: body ? body : null,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId(),
        ...this.header
      })
    };

    return this.http.request(HttpService.METHOD_POST, url, options);
  }

  /**
   * POST 请求文件下载 方法 pengfei
   * @param {string} url
   * @param body
   * @returns {Observable<{}>}
   */
  public postFile(url: string, body: any = null): Observable<{}> {
    const options = {
      body: body ? body : null,
      headers: new HttpHeaders({
        Authorization: this.authService.getSessionId()
      })
    };

    return this.http.request(HttpService.METHOD_POST, url, options);
  }

  /**
   * FORM post方法
   * @param {string} url
   * @param paramMap
   * @returns {Observable<{}>}
   */
  public postFormData(url: string, paramMap: any = null): Observable<{}> {
    const options = {
      body: HttpService.buildURLSearchParams(paramMap).toString(),
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: this.authService.getSessionId()
      })
    };

    return this.http.request(HttpService.METHOD_POST, url, options);
  }

  /**
   * PUT 方法
   * @param {string} url
   * @param body
   * @returns {Observable<{}>}
   */
  public put(url: string, body: any = null): Observable<{}> {
    const options = {
      body: body,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId()
      })
    };
    return this.http.request(HttpService.METHOD_POST, url, options);
  }

  /**
   * 删除 DELETE 方法
   * @param {string} url
   * @param paramMap
   * @returns {any}
   */
  public delete(url: string, body: any = null): any {
    const options = {
      body: body ? body : null,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: this.authService.getSessionId(),
        ...this.header
      })
    };
    return this.http.request(HttpService.METHOD_POST, url, options);
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err) {
    let msg = '请求发生异常';
    const status = err.status;
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    } else {
      msg = '未知错误，请检查网络';
    }

    return msg;
  }
}
