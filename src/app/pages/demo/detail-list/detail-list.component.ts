import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.less']
})
export class DetailListComponent implements OnInit {
  apiMarkdown = require('raw-loader!./docs/api.md');

  markdownTabs: any[] = [
    { title: 'HTML', markdown: require('raw-loader!./docs/html.md') },
    { title: 'JS', markdown: require('raw-loader!./docs/js.md') }
  ];

  mode = 'horizontal';

  colon = ':';

  data = {
    name: '刘备',
    age: '48',
    position: '汉昭烈帝',
    address: '大汉蜀郡成都',
    time: new Date().getTime() - 48 * 24 * 3600 * 1000,
    website: 'https://baike.baidu.com/item/%E5%88%98%E5%A4%87/30564',
    remark:
      '汉昭烈帝刘备（161年－223年6月10日），（221年—223年在位），字玄德，涿郡涿县（今河北涿州）人，西汉中山靖王刘胜之后，蜀汉开国皇帝、政治家。史家多称其为先主。刘备少年时拜卢植为师，而后参与镇压黄巾起义、讨伐董卓等活动，因为自身实力有限，刘备在诸侯混战过程中屡屡遭受失败，所以先后依附公孙瓒、陶谦、曹操、袁绍、刘表等多个诸侯。'
  };

  list: any[] = [
    { label: '姓名', key: 'name' },
    { label: '年龄', key: 'age' },
    { label: '出生时间', key: 'time' },
    { label: '身份', key: 'position' },
    { label: '地址', key: 'address', col: 8 },
    { label: '百度百科', key: 'website', col: 8, renderKey: 'linkTemp' },
    { label: '简介', key: 'remark', col: 24 }
  ];

  constructor() {}

  ngOnInit() {}
}
