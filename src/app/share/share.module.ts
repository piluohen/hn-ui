import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HttpExceptionInterceptor } from './httpExceptionInterceptor';
import { TrustHtmlPipe, TrustScriptPipe, TrustStylePipe, TrustUrlPipe } from './trust-resource.pipe';
import { WebcamModule } from 'ngx-webcam';

import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { HnUiModule } from 'components/hn-ui.module';

import { HttpService } from '../service/http/http.service';
import { AuthService } from '../auth.service';

import { ScrollDirective } from '../directive/scroll.directive';
import { LayoutComponent } from '../components/layout/layout.component';

import { MarkdownTabComponent } from '../components/model/markdown-tab/markdown-tab.component';

/**
 *公共组件
 * @type {any[]}
 */
const COMPONENT = [TrustUrlPipe, TrustHtmlPipe, TrustScriptPipe, TrustStylePipe, LayoutComponent, MarkdownTabComponent];

/**
 * 第三方模块
 * @type {NgZorroAntdModule[]}
 */
const THIRD_MODULE = [NgZorroAntdModule, WebcamModule, HnUiModule];

/**
 * 公共指令
 * @type {any[]}
 */
const DIRECTIVES = [ScrollDirective];

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MarkdownModule.forChild(),
    ...THIRD_MODULE
  ],
  declarations: [...COMPONENT, ...DIRECTIVES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpExceptionInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    HttpService,
    AuthService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MarkdownModule,
    ...THIRD_MODULE,
    ...COMPONENT,
    ...DIRECTIVES
  ]
})
export class ShareModule {}
