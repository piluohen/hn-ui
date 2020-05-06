import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  @Input() list: any[] = [];

  constructor() {}

  ngOnInit() {}

  handleClick(event: any) {
    window.location.hash = event;
  }
}
