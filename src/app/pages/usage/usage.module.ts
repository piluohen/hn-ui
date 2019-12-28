import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { UsageRoutingModule } from './usage-routing.module';

import { UsageComponent } from './usage.component';

@NgModule({
  imports: [ShareModule, UsageRoutingModule],
  declarations: [UsageComponent],
  entryComponents: []
})
export class UsageModule {}
