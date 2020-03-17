## 安装

> npm install --save hn-ui

## 使用

### 一、引入 HnUiModule

```JS
import { HnUiModule } from 'hn-ui';

@NgModule({
  imports: [
    CommonModule,
    HnUiModule
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    HnUiModule
  ]
})

```

### 二、引入 css

在 angular.json 文件的 styles 列表加入 hn-ui.min.css

```JS
"styles": [
    ...
    "node_modules/hn-ui/hn-ui.min.css"
  ]
```

## 按需加载

组件库支持按需加载各个组件，对于简单使用少量组件的项目，建议使用按需加载，如何使用？

### 一、引入需要组件的 module

在使用该组件的 module 里面

```JS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnButtonModule } from 'hn-ui/hn-button';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    CommonModule,
    HnButtonModule
  ]
})
export class YourModule { }
```

### 二、引入 css

在 angular.json 文件的 styles 列表加入 hn-ui.min.css

```JS
"styles": [
    ...
    "~hn-ui/hn-button/style/index.min.css"
  ]
```

或者在 theme.less 直接引用 组件 less 文件

```CSS
@import "~hn-ui/style/theme.less"; /* 引入基本样式 */
@import "~hn-ui/hn-button/style/index.less"; /* 引入组件样式 */
```
