import { InjectionToken } from '@angular/core';

import { HnTreeBaseService } from './hn-tree-base.service';

export const HnTreeHigherOrderServiceToken = new InjectionToken<HnTreeBaseService>('HnTreeHigherOrder');
