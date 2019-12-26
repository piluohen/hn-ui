import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { menuList } from './menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // 折叠菜单
  isCollapsed = false;

  menusList: any[] = menuList;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
