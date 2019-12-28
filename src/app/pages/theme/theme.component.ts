import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less']
})
export class ThemeComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md');

  constructor() {}

  ngOnInit() {}
}
