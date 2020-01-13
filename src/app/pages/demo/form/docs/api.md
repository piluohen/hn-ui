## Api

| 参数         |          描述          |    类型     |                          可选值                           | 必须 | 默认值     |
| ------------ | :--------------------: | :---------: | :-------------------------------------------------------: | :--: | ---------- |
| mode         |        布局模式        |   String    | horizontal \| vertical \| inline \| grid \| grid-vertical |  否  | horizontal |
| formList     |       表单数据列       |    Array    |                                                           |  否  | []         |
| labelWidth   |       label 宽度       |   String    |                                                           |  否  | 100px      |
| params       |        参数数据        |   Object    |                                                           |  是  | {}         |
| hasExplain   |  是否开启文字错误提示  |   Boolean   |                                                           |  否  | true       |
| hasValidator |      是否开启校验      |   Boolean   |                                                           |  否  | true       |
| render       | control 内容自定义模板 | TemplateRef |                                                           |  否  |            |

## Event

| 事件   |     描述     | 参数 |
| ------ | :----------: | :--: |
| submit | 提交表单数据 | data |
