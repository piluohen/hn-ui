import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';
import { AnimationCurves } from 'ng-zorro-antd/core/animation';

export const treeCollapseMotion: AnimationTriggerMetadata = trigger('treeCollapseMotion', [
  transition(':leave', [
    style({ overflow: 'hidden' }),
    animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ height: 0 }))
  ]),
  transition(':enter', [
    style({ overflow: 'hidden', height: 0 }),
    animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ overflow: 'hidden', height: '*' }))
  ])
]);
