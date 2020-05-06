import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})
export class CatalogComponent implements OnInit {
  @Input() list: any[] = [];

  constructor(private router: Router) {
    console.log(this.router);
  }

  ngOnInit() {}

  handleClick(event: any) {
    console.log(event);
    window.location.hash = event;
  }
}
