import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-markdown-tab',
  templateUrl: './markdown-tab.component.html',
  styleUrls: ['./markdown-tab.component.less']
})
export class MarkdownTabComponent implements OnInit {
  @Input() list: any = [];

  constructor(private message: NzMessageService) {}

  ngOnInit() {}

  handleCopy(event: any): void {
    const copyStr = event.target.parentElement.children[0].innerText;

    const tag = document.createElement('textarea');
    tag.value = copyStr;
    document.body.appendChild(tag);
    tag.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    tag.style.display = 'none';
    this.message.create('success', `复制成功！`);
  }
}
