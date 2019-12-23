import { NgModule, ModuleWithProviders } from '@angular/core';

import { HnCountupModule } from './hn-countup/hn-countup.module';
import { HnPreviewModule } from './hn-preview/hn-preview.module';
import { HnScrollListModule } from './hn-scroll-list/hn-scroll-list.module';
import { HnButtonModule } from './hn-button/hn-button.module';
import { HnCheckboxGroupModule } from './hn-checkbox-group/hn-checkbox-group.module';
import { HnTableModule } from './hn-table/hn-table.module';

@NgModule({
  exports: [HnCountupModule, HnPreviewModule, HnScrollListModule, HnButtonModule, HnCheckboxGroupModule, HnTableModule]
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
