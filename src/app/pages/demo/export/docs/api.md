## Api

| 参数     |        描述        |   类型   |                         可选值                          | 必须  | 默认值  |
| -------- | :----------------: | :------: | :-----------------------------------------------------: | :---: | ------- |
| type     |        类型        |  String  | default \| primary \| success \|warning \|danger \|info | false | default |
| ghost    |     是否是圆角     | Boolean  |                                                         |  否   | false   |
| shape    |      幽灵按钮      | Boolean  |                                                         |  否   | false   |
| size     |        尺寸        |  String  |                default \| small \| large                |  否   | default |
| block    | 是否适应父元素宽高 | Boolean  |                                                         |  否   | false   |
| icon     |     icon 图标      |  String  |                                                         |  否   | -       |
| showIcon |   是否展示 iicon   | Boolean  |                                                         |  否   | true    |
| disabled |        禁用        | Boolean  |                                                         |  否   | false   |
| api      |    数据请求方法    | Function |                                                         | true  | --      |
| params   |      传入参数      |  Object  |                                                         | false | {}      |
| download |    下载文件名称    |  String  |                                                         | false | ''      |
| text     |      按钮文字      |  String  |                                                         | false | 导出    |
