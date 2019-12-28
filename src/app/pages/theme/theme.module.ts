import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { ThemeRoutingModule } from './theme-routing.module';

import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [ShareModule, ThemeRoutingModule],
  declarations: [ThemeComponent],
  entryComponents: []
})
export class ThemeModule {}
