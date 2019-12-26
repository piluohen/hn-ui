import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md');

  baseTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/base.md') }];

  iconTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/icon.md') }];

  sizeTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/size.md') }];

  ghostTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/ghost.md') }];

  blockTabs: any[] = [{ title: 'HTML', markdown: require('raw-loader!./docs/block.md') }];

  constructor() {}

  ngOnInit() {}
}
