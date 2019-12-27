## Api

| 参数        |            描述             |    类型     | 可选值 | 必须 | 默认值         |
| ----------- | :-------------------------: | :---------: | :----: | :--: | -------------- |
| formList    |         表单数据列          |    Array    |        |  否  | []             |
| keyword     |       模糊搜索关键字        |   String    |        |  否  | searchContent  |
| placeholder | 模糊搜索输入框 placeholder  |   String    |        |  否  | 请输入查询条件 |
| render      | 模糊搜索输入框 render 模板  | TemplateRef |        |  否  |                |
| itemRender  | 表单 control 内容自定义模板 | TemplateRef |        |  否  |                |

## Event

| 事件   |   描述   |     参数      |
| ------ | :------: | :-----------: |
| search | 搜索方法 | 搜索数据 data |
