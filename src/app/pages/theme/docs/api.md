## 主题定制

如同 ang-zorro-ant 组件 [定制主题](https://ng.ant.design/version/7.5.x/docs/customize-theme/zh)

在 src 目录下建立一个单独的 theme.less 文件，在 angular.json 文件的 styles 列表加入该文件

```JS
"styles": [
...
"src/theme.less"
...
]
```

theme.less 样例如下

> 在样例中通过修改 @primary-color 的数值将 ng-zorro-antd 与 hn-ui 的基础色修改为 #f5222d，开发者可以根据实际需求自由修改。

```css
// -------- 引入官方提供的 less 样式入口文件 -----------
@import '../node_modules/ng-zorro-antd/ng-zorro-antd.less';
@import '../node_modules/hn-ui/hn-ui.less';

// -------- 自定义参数覆盖 -----------
@primary-color: #f5222d;
```

全部可被自定义 less 变量可以参考 [这里](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less)
