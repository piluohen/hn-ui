import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hn-detail-title',
  templateUrl: './hn-detail-title.component.html',
  styleUrls: ['./hn-detail-title.component.less']
})
export class HnDetailTitleComponent implements OnInit {
  @Input() icon: String = 'star';
  @Input() theme: String = 'outline';
  @Input() title: String = '';
  constructor() {}

  ngOnInit() {}
}
