## Api

| 参数               | 描述                                             | 类型                  | 可选值                     | 必须 | 默认值                       |
| ------------------ | ------------------------------------------------ | --------------------- | -------------------------- | ---- | ---------------------------- |
| data               | 传入数据，与 api 二选一传入                      | Array                 |                            | 是   | []                           |
| api                | 数据请求方法，与 data 二选一传入                 | Function              |                            | 是   | --                           |
| size               | 尺寸                                             | String                | default \| small \| middle | 否   | default                      |
| params             | 传入参数                                         | Object                |                            | 否   | {}                           |
| columns            | 列数据                                           | Array                 |                            | 是   | []                           |
| totalKey           | 总数据字段的 key                                 | String                |                            | 否   | total                        |
| contentKey         | 数据内容的 key                                   | String                |                            | 否   | list                         |
| showSelect         | 是否使用多选功能(1.1.6 之后不建议使用)           | Boolean               |                            | 否   | false                        |
| showPagination     | 是否分页                                         | Boolean               |                            | 否   | true                         |
| paginationPosition | 分页器位置                                       | String                | bottom \| top \| both      | 否   | bottom                       |
| pagination         | 配置分页页码与每页数量                           | Object                |                            | 否   | {pageSize: 10, pageIndex: 1} |
| pageSizeOptions    | 配置分页数量菜单                                 | Array                 |                            | 否   | [10, 20, 30, 40, 50]         |
| showSizeChanger    | 是否可以改变分页数量                             | Boolean               |                            | 否   | true                         |
| showQuickJumper    | 分页是否允许页码跳转                             | Boolean               |                            | 否   | false                        |
| hideOnSinglePage   | 只有一页数据时是否隐藏分页                       | Boolean               |                            | 否   | false                        |
| simplePage         | 是否为简单分页                                   | Boolean               |                            | 否   | false                        |
| bordered           | 是否带 border 边框                               | Boolean               |                            | 否   | false                        |
| scroll             | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度 | Object                |                            | 否   | {}                           |
| footer             | 表格尾部                                         | String ｜ TemplateRef |                            | 否   | --                           |
| render             | 模板对象                                         | TemplateRef           |                            | 否   | {}                           |
| expandRender       | 展开 render 模板                                 | TemplateRef           |                            | 否   |                              |
| draggable          | 是否开启拖拽                                     | Boolean               |                            | 否   | false                        |
| draggDisabledKey   | 禁用拖拽 key 值                                  | String                |                            | 否   | disabled                     |
| singleSort         | 是否单列模式排序                                 | Boolean               |                            | 否   | false                        |

<!-- | showRowSelection   | 显示下拉选择                                     | Boolean               |                            | 否   | false                            | -->
<!-- | selections         | 下拉选择配置项，配合 showRowSelection 使用       | Array                 |                            | 否   | [{text: '', onSelect: () => {}}] | -->

## Event

| 名称          | 描述             | 返回值 |
| ------------- | ---------------- | ------ |
| checkChange   | 多选项改变方法   | -      |
| sortChange    | 排序事件         | -      |
| virtualChange | 虚拟滚动监听事件 | -      |
| draggChange   | 拖拽监听         | -      |
