import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-list',
  templateUrl: './hn-list.component.html',
  styleUrls: ['./hn-list.component.less']
})
export class HnListComponent implements OnInit {
  @Input() icon: string;
  @Input() list: any[] = [];

  constructor() {}

  ngOnInit() {}
}
