import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.less']
})
export class CountupComponent implements OnInit {
  value: any = 500;
  value1 = 435.45;
  apiMarkdown = require('raw-loader!./docs/api.md');

  constructor() {}

  ngOnInit() {}

  handleChange() {
    this.value = Math.floor(Math.random() * 2000);
    this.value1 = Math.random() * 2000;
  }
}
