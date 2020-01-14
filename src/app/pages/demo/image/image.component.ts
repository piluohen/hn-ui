import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  fit = 'fill';

  fitTabs: string[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];

  singleImg = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

  imgList: any = [
    { url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg', lazy: true },
    { url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', lazy: true }
  ];

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md') }
  ];

  apiMarkdown = require('raw-loader!./docs/api.md');

  constructor() {}

  ngOnInit() {}

  handleClick(data: any): void {
    console.log('点击了图片列表子项', data);
  }
}
