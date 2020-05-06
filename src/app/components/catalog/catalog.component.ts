import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
    const el = document.querySelectorAll(event)[0];
    el.scrollIntoView({ block: 'center', inline: 'nearest' });
  }
}
