## Api

| 参数           | 描述                                             | 类型                  | 可选值 | 必须 | 默认值                       |
| -------------- | ------------------------------------------------ | --------------------- | ------ | ---- | ---------------------------- |
| data           | 传入数据，与 api 二选一传入                      | Array                 |        | 是   | []                           |
| api            | 数据请求方法，与 data 二选一传入                 | Function              |        | 是   | --                           |
| params         | 传入参数                                         | Object                |        | 否   | {}                           |
| columns        | 列数据                                           | Array                 |        | 是   | []                           |
| totalKey       | 总数据字段的 key                                 | String                |        | 否   | total                        |
| contentKey     | 数据内容的 key                                   | String                |        | 否   | list                         |
| showSelect     | 是否使用多选功能                                 | Boolean               |        | 否   | true                         |
| showPagination | 是否分页                                         | Boolean               |        | 否   | true                         |
| pagination     | 配置分页页码与每页数量                           | Object                |        | 否   | {pageSize: 10, pageIndex: 1} |
| bordered       | 是否带 border 边框                               | Boolean               |        | 否   | false                        |
| scroll         | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度 | Object                |        | 否   | {}                           |
| footer         | 表格尾部                                         | string ｜ TemplateRef |        | 否   | --                           |
| render         | 模板对象                                         | Object                |        | 否   | {}                           |

## Event

| 名称        | 描述           | 返回值 |
| ----------- | -------------- | ------ |
| checkChange | 多选项改变方法 | -      |
