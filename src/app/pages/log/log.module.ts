import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { LogRoutingModule } from './log.routing.module';

import { LogComponent } from './log.component';

@NgModule({
  imports: [ShareModule, LogRoutingModule],
  declarations: [LogComponent],
  entryComponents: []
})
export class LogModule {}
