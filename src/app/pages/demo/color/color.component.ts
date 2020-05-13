import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.less']
})
export class ColorComponent implements OnInit {
  colorList: any = [
    { title: 'primary', color: '#1293f1' },
    { title: 'success', color: '#56c51f' },
    { title: 'danger', color: '#ffd045' },
    { title: 'warning', color: '#fd4323' },
    { title: 'info', color: '#8a92a5' },
    { title: 'title', color: '#333333' },
    { title: 'content', color: '#666666' },
    { title: 'disabled', color: '#999999' },
    { title: 'border', color: '#e8e8e8' }
  ];

  constructor() {}

  ngOnInit() {}
}
