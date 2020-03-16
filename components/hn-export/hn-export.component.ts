import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'hn-export',
  templateUrl: './hn-export.component.html',
  styles: ['.hn-export { display: inline-block }']
})
export class HnExportComponent implements OnInit {
  @Input() icon = 'download';
  @Input() type = 'default';
  @Input() size = 'default';
  @Input() ghost = false;
  @Input() block = false;
  @Input() disabled = false;
  @Input() shape = false;
  @Input() render: any;

  @Input() text = '导出';

  @Input() api: any;
  @Input() params: any = {};
  @Input() download = '';

  constructor(private message: NzMessageService) {}

  ngOnInit() {}

  /**
   * 是否为空
   * @param value 值
   */
  notEmpty(value: any): boolean {
    return value !== null && value !== '' && value !== undefined;
  }

  /**
   * 过滤空对象
   * @param data 数据
   */
  filterEmptyObj(data: any) {
    const params: any = {};
    for (const key in data) {
      if (this.notEmpty(data[key])) {
        params[key] = data[key];
      }
    }
    return params;
  }

  /**
   * 点击事件
   */
  handleClick() {
    this.api().subscribe(res => {
      if (res['success']) {
        const filePath = res['data'].filePath;
        this.downloadFile(filePath);
      } else {
        this.message.create('error', `导出失败`);
      }
    });
  }

  /**
   * 导出方法
   * @param filePath 相对路径
   * @param p 参数
   */
  downloadFile(filePath: any) {
    const httpParams = new HttpParams().append('filePath', filePath).append('expName', this.download);
    const src = `${window.location.origin}/ipark-base/download/downloadFile?${httpParams}`;
    const oA = document.createElement('a');
    oA.href = src;
    oA.click();
  }
}
