import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md').default;

  baseTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/base.md').default }];

  iconTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/icon.md').default }];

  sizeTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/size.md').default }];

  ghostTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/ghost.md').default }];

  blockTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/block.md').default }];

  catalogList: any[] = [
    { id: 'default', title: '默认用法' },
    { id: 'base', title: '基础用法' },
    { id: 'icon', title: '带icon图标' },
    { id: 'size', title: 'size、shape用法' },
    { id: 'ghost', title: '幽灵按钮' },
    { id: 'block', title: 'block用法' },
    { id: 'api', title: 'API' }
  ];

  constructor() {}

  ngOnInit() {}
}
