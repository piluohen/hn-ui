import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { HttpSpinService } from './http-spin.service';
import { catchError, finalize, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpExceptionInterceptor implements HttpInterceptor {
  static isOpened = false;
  constructor(private modalService: NzModalService, private spinService: HttpSpinService) {}

  openMessageDialog(message: string, onOk?: () => void) {
    if (HttpExceptionInterceptor.isOpened) {
      return;
    }
    HttpExceptionInterceptor.isOpened = true;

    this.modalService.error({
      nzContent: message,
      nzOnOk: () => {
        if (onOk) {
          onOk();
        }
        HttpExceptionInterceptor.isOpened = false;
      }
    });
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse) {
    switch (event.status) {
      case 200:
        break;
      case 401: // 未登录状态码
        if (event instanceof HttpResponse) {
          if (event.body && event.body['code'] !== 200) {
            return throwError(event.body);
          }
        }
        this.openMessageDialog('登录超时，请重新登录', () => {
          top.window.location.href = environment.LOGIN_URL;
        });
        break;
      default:
        return throwError(event);
    }
    return of(event);
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const clonedHttp = req.clone();

    this.spinService.publish(true);
    const handle: Observable<HttpEvent<any>> = next.handle(clonedHttp);
    return handle.pipe(
      mergeMap((evt: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        if (evt instanceof HttpResponse && evt.status === 200) {
          return this.handleData(evt);
        }

        // 若一切都正常，则后续操作
        return of(evt);
      }),

      catchError((err: HttpErrorResponse) => this.handleData(err)),
      finalize<any>(() => {
        this.spinService.publish(false);
      })
    );
  }
}
