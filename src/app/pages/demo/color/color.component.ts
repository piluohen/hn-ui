import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.less']
})
export class ColorComponent implements OnInit {

  colorList: any = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'title',
    'content',
    'disabled',
    'border'
  ];

  constructor() { }

  ngOnInit() {
  }

}
