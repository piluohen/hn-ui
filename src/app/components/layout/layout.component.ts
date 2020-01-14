import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { menuList } from '../../mock/menu';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // 折叠菜单
  isCollapsed = false;

  menusList: any[] = [];

  destroy$ = new Subject();

  routerEvent: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.updateRoute();
  }

  ngOnInit() {}

  /**
   * 监听路由变更，解决菜单高亮问题
   */
  updateRoute(): void {
    this.routerEvent = this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe(data => {
        const { url } = data as any;
        this.menusList = this.updateMenu([...menuList], url);
        window.scrollTo(0, 0);
      });
  }

  /**
   * 变更菜单高亮
   * @param url 路径
   */
  updateMenu(data: any, url: string) {
    return [...data].map(item => {
      if (item.path === url) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      if (item.children) {
        item.children = this.updateMenu([...item.children], url);
      }
      return item;
    });
  }
}
