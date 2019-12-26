import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnExportComponent } from './hn-export.component';
import { HnButtonModule } from '../hn-button/hn-button.module';

@NgModule({
  imports: [NgZorroModule, HnButtonModule],
  declarations: [HnExportComponent],
  exports: [HnExportComponent]
})
export class HnExportModule {}
