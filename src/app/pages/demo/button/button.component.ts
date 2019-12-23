import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  baseMarkdown = require('raw-loader!./docs/base.md');

  iconMarkdown = require('raw-loader!./docs/icon.md');

  sizeMarkdown = require('raw-loader!./docs/size.md');

  ghostMarkdown = require('raw-loader!./docs/ghost.md');

  apiMarkdown = require('raw-loader!./docs/api.md');

  blockMarkdown = require('raw-loader!./docs/block.md');

  constructor() {}

  ngOnInit() {}
}
