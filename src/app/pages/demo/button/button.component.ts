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

  constructor() {}

  ngOnInit() {}
}
