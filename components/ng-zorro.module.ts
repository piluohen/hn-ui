import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NZ_I18N,
  zh_CN,
  NzIconModule,
  NzCarouselModule,
  NzModalModule,
  NzButtonModule,
  NzCheckboxModule,
  NzTableModule
} from 'ng-zorro-antd';

const ngZorro = [
  NzIconModule,
  NzCarouselModule,
  NzModalModule,
  NzButtonModule,
  NzCheckboxModule,
  NzTableModule
];

@NgModule({
  imports: [
    CommonModule,
    ...ngZorro
  ],
  declarations: [
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports: [
    CommonModule,
    ...ngZorro
  ]
})
export class NgZorroModule { }
