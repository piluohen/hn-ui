import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.less']
})
export class PreviewComponent implements OnInit {
  imgList: any = [
    {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577334090354&di=0ffc23674205d504ceabbfe83d7b0064&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd009b3de9c82d1587e249850820a19d8bd3e42a9.jpg'
    },
    {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577334090354&di=7a455aa770f9cd483ffd4ad933d24b63&imgtype=0&src=http%3A%2F%2Ffile2.desktx.com%2Fpc%2Fwallpaper%2F2014%2F12%2F53c729c5e99d2.jpg'
    },
    {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577334090354&di=d027e24027907fe02c03e2ffc02af8eb&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F62%2F17%2F96m58PICMCX_1024.jpg'
    },
    {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577334090367&di=1593cdf1187e1cd5085ea629d5dae7f3&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1611%2F902-161121160008.png'
    }
  ];

  imgListTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/hn-img-list/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/hn-img-list/js.md') }
  ];

  constructor() {}

  ngOnInit() {
    console.log(require('raw-loader!./docs/hn-img-list/html.md'));
  }

  handleClick(data: any): void {
    console.log('点击了图片列表子项', data);
  }

  handleCopy(event: any): void {
    console.log(event);
    const copyStr = event.target.parentElement.children[0].innerText;
    console.log();
  }
}
