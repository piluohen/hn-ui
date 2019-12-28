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

````JS
"styles": [
    ...
    "node_modules/hn-ui/hn-ui.min.css"
  ]
```
````
