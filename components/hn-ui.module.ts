import { NgModule, ModuleWithProviders } from '@angular/core';

import { HnCountupModule } from './hn-countup/hn-countup.module';
import { HnPreviewModule } from './hn-preview/hn-preview.module';
import { HnScrollListModule } from './hn-scroll-list/hn-scroll-list.module';
import { HnButtonModule } from './hn-button/hn-button.module';
import { HnCheckboxGroupModule } from './hn-checkbox-group/hn-checkbox-group.module';
import { HnTableModule } from './hn-table/hn-table.module';
import { HnDetailListModule } from './hn-detail-list/hn-detail-list.module';
import { HnImgListModule } from './hn-img-list/hn-img-list.module';
import { HnListModule } from './hn-list/hn-list.module';
import { HnSearchModule } from './hn-search/hn-search.module';
import { HnSingleSearchModule } from './hn-single-search/hn-single-search.module';
import { HnTableMsgModule } from './hn-table-msg/hn-table-msg.module';
import { HnExportModule } from './hn-export/hn-export.module';

export * from './hn-countup';
export * from './hn-preview';
export * from './hn-scroll-list';
export * from './hn-button';
export * from './hn-checkbox-group';
export * from './hn-table';
export * from './hn-detail-list';
export * from './hn-img-list';
export * from './hn-list';
export * from './hn-search';
export * from './hn-single-search';
export * from './hn-table-msg';
export * from './hn-export';

@NgModule({
  exports: [
    HnCountupModule,
    HnPreviewModule,
    HnScrollListModule,
    HnButtonModule,
    HnCheckboxGroupModule,
    HnTableModule,
    HnDetailListModule,
    HnImgListModule,
    HnListModule,
    HnSearchModule,
    HnSingleSearchModule,
    HnTableMsgModule,
    HnExportModule
  ]
})
export class HnUiModule {
  /**
   * @deprecated Use `HnUiModule` instead.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HnUiModule
    };
  }
}
