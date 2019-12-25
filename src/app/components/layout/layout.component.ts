import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // 折叠菜单
  isCollapsed = false;

  menusList: any[] = [
    {
      title: 'demo',
      icon: 'dashboard',
      open: true,
      children: [
        { title: 'color', path: '/demo/color' },
        { title: 'hn-button', path: '/demo/hn-button' },
        { title: 'hn-countup', path: '/demo/hn-countup' },
        { title: 'hn-preview', path: '/demo/hn-preview' },
        { title: 'hn-scroll-list', path: '/demo/hn-scroll-list' },
        { title: 'hn-checkbox-group', path: '/demo/hn-checkbox-group' },
        { title: 'hn-table', path: '/demo/hn-table' },
        { title: 'hn-detail-list', path: '/demo/hn-detail-list' }
      ]
    }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
