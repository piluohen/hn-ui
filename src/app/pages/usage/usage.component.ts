import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.less']
})
export class UsageComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md').default;

  constructor() {}

  ngOnInit() {}
}
