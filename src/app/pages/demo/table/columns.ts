export const columns: any[] = [
  { title: '名称', key: 'name' },
  { title: '性别', key: 'gender' },
  { title: '年龄', key: 'age' },
  { title: '身高', key: 'height' },
  { title: '身份', key: 'identity' },
  { title: '出生日期', key: 'createTime' },
  { title: '链接', key: 'link', renderKey: 'linkTemp' },
  { title: '操作', right: '0px', width: '80px', renderKey: 'operateTemp' }
];

export const item = {
  name: '刘备',
  gender: '男',
  age: 30,
  height: '7尺7寸',
  identity: '季汉昭烈帝',
  createTime: 456,
  link: 'https://www.baidu.com'
};
