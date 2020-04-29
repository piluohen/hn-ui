import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit {
  apiMarkdown = require('raw-loader!../../../../CHANGELOG.md');

  constructor() {}

  ngOnInit() {}
}
