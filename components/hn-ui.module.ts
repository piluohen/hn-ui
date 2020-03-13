import { NgModule, ModuleWithProviders } from '@angular/core';

import { HnHighlightModule } from 'hn-ui/hn-highlight';
import { HnCountupModule } from 'hn-ui/hn-countup';
import { HnScrollListModule } from 'hn-ui/hn-scroll-list';
import { HnButtonModule } from 'hn-ui/hn-button';
import { HnCheckboxGroupModule } from 'hn-ui/hn-checkbox-group';
import { HnTableModule } from 'hn-ui/hn-table';
import { HnDetailListModule } from 'hn-ui/hn-detail-list';
import { HnImageModule } from 'hn-ui/hn-image';
import { HnPreviewModule } from 'hn-ui/hn-preview';
import { HnImgListModule } from 'hn-ui/hn-img-list';
import { HnListModule } from 'hn-ui/hn-list';
import { HnFormModule } from 'hn-ui/hn-form';
import { HnSearchModule } from 'hn-ui/hn-search';
import { HnSingleSearchModule } from 'hn-ui/hn-single-search';
import { HnTableMsgModule } from 'hn-ui/hn-table-msg';
import { HnExportModule } from 'hn-ui/hn-export';
import { HnTreeModule } from 'hn-ui/hn-tree';

export * from 'hn-ui/core';
export * from 'hn-ui/hn-countup';
export * from 'hn-ui/hn-scroll-list';
export * from 'hn-ui/hn-button';
export * from 'hn-ui/hn-checkbox-group';
export * from 'hn-ui/hn-table';
export * from 'hn-ui/hn-detail-list';
export * from 'hn-ui/hn-preview';
export * from 'hn-ui/hn-image';
export * from 'hn-ui/hn-img-list';
export * from 'hn-ui/hn-list';
export * from 'hn-ui/hn-form';
export * from 'hn-ui/hn-search';
export * from 'hn-ui/hn-single-search';
export * from 'hn-ui/hn-table-msg';
export * from 'hn-ui/hn-export';
export * from 'hn-ui/hn-tree';

@NgModule({
  exports: [
    HnHighlightModule,
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
    HnExportModule,
    HnFormModule,
    HnTreeModule,
    HnImageModule
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
