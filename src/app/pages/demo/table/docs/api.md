## hn-table Api

| 参数               | 描述                                             | 类型                  | 可选值                     | 必须 | 默认值                       |
| ------------------ | ------------------------------------------------ | --------------------- | -------------------------- | ---- | ---------------------------- |
| data               | 传入数据，与 api 二选一传入                      | Array                 |                            | 是   | []                           |
| api                | 数据请求方法，与 data 二选一传入                 | Function              |                            | 是   | --                           |
| size               | 尺寸                                             | String                | default \| small \| middle | 否   | default                      |
| params             | 传入参数                                         | Object                |                            | 否   | {}                           |
| columns            | 列数据                                           | Array                 |                            | 是   | []                           |
| loading            | 是否加载中状态                                   | Boolean               |                            | 否   | true                         |
| totalKey           | 总数据字段的 key                                 | String                |                            | 否   | total                        |
| contentKey         | 数据内容的 key                                   | String                |                            | 否   | list                         |
| showPagination     | 是否分页                                         | Boolean               |                            | 否   | true                         |
| paginationPosition | 分页器位置                                       | String                | bottom \| top \| both      | 否   | bottom                       |
| pagination         | 配置分页页码与每页数量                           | Object                |                            | 否   | {pageSize: 10, pageIndex: 1} |
| pageSizeOptions    | 配置分页数量菜单                                 | Array                 |                            | 否   | [10, 20, 30, 40, 50]         |
| showSizeChanger    | 是否可以改变分页数量                             | Boolean               |                            | 否   | true                         |
| showQuickJumper    | 分页是否允许页码跳转                             | Boolean               |                            | 否   | false                        |
| hideOnSinglePage   | 只有一页数据时是否隐藏分页                       | Boolean               |                            | 否   | false                        |
| simplePage         | 是否为简单分页                                   | Boolean               |                            | 否   | false                        |
| bordered           | 是否带 border 边框                               | Boolean               |                            | 否   | false                        |
| tableLayout        | 表格布局方式                                     | String                | auto \| fixed              | 否   | auto                         |
| scroll             | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度 | Object                |                            | 否   | {}                           |
| footer             | 表格尾部                                         | String ｜ TemplateRef |                            | 否   | --                           |
| render             | 模板对象                                         | TemplateRef           |                            | 否   | {}                           |
| theadRender        | thead 模板                                       | TemplateRef           |                            | 否   |                              |
| expandRender       | 展开 render 模板                                 | TemplateRef           |                            | 否   |                              |
| draggable          | 是否开启拖拽                                     | Boolean               |                            | 否   | false                        |
| draggDisabledKey   | 禁用拖拽 key 值                                  | String                |                            | 否   | disabled                     |

<!-- | showRowSelection   | 显示下拉选择                                     | Boolean               |                            | 否   | false                            | -->
<!-- | selections         | 下拉选择配置项，配合 showRowSelection 使用       | Array                 |                            | 否   | [{text: '', onSelect: () => {}}] | -->

## Event

| 名称          | 描述             | 返回值 |
| ------------- | ---------------- | ------ |
| checkChange   | 多选项改变方法   | -      |
| virtualChange | 虚拟滚动监听事件 | -      |
| draggChange   | 拖拽监听         | -      |

## columns Api

### 基本

| 参数      | 描述                   | 类型              | 可选值                  | 必须 | 默认值 |
| --------- | ---------------------- | ----------------- | ----------------------- | ---- | ------ |
| title     | th 标题                | String            |                         | 否   |        |
| key       | 列数据 key 值          | String            |                         | 否   |        |
| width     | 列宽度                 | String            |                         | 否   |        |
| align     | 水平方向位置           | String            | left \| center \| right | 否   | 'left' |
| left      | 浮动到左侧距边框的位置 | String \| Boolean |                         | 否   | false  |
| right     | 浮动到右侧距边框的位置 | String \| Boolean |                         | 否   | false  |
| breakWord | 是否折行显示           | Boolean           |                         | 否   | false  |
| ellipsis  | 超过宽度将自动省略     | Boolean           |                         | 否   | false  |

### render

| 参数        | 描述                                                | 类型   | 可选值 | 必须 | 默认值 |
| ----------- | --------------------------------------------------- | ------ | ------ | ---- | ------ |
| renderkey   | td render 模板 key 值，配合 hn-table 的 render 使用 | String |        | 否   |        |
| thRenderkey | th render 模板 key 值，配合 hn-table 的 render 使用 | String |        | 否   |        |

### 展开

| 参数           | 描述                                 | 类型    | 可选值 | 必须 | 默认值 |
| -------------- | ------------------------------------ | ------- | ------ | ---- | ------ |
| showExpand     | 显示展开按钮，配合 expandRender 使用 | Boolean |        | 否   | false  |
| (expandChange) | 展开监听方法                         | Event   |        |      |        |  |

### 多选

| 参数         | 描述                              | 类型    | 可选值 | 必须 | 默认值 |
| ------------ | --------------------------------- | ------- | ------ | ---- | ------ |
| showCheckbox | 显示多选框，配合 checkChange 使用 | Boolean |        | 否   | false  |
| disabled     | 是否禁用多选框                    | Boolean |        | 否   | false  |

### 排序

| 参数              | 描述                               | 类型                                               | 可选值                        | 必须 | 默认值                      |
| ----------------- | ---------------------------------- | -------------------------------------------------- | ----------------------------- | ---- | --------------------------- |
| showSort          | 显示排序按钮，配合 sortChange 使用 | Boolean                                            |                               | 否   | false                       |
| sortFn            | 排序函数                           | `((a: any, b: any, sortOrder?: string) => number)` |                               | 否   |                             |
| sortDirections    | 支持的排序方式                     | Array                                              |                               | 否   | ['ascend', 'descend', null] |
| sortOrder         | 当前排序状态                       | String                                             | 'descend' \| 'ascend' \| null | 否   | null                        |
| (sortOrderChange) | 排序状态改变回调                   | Event                                              |                               | 否   |                             |

### 过滤

| 参数           | 描述                               | 类型                                    | 可选值 | 必须 | 默认值                  |
| -------------- | ---------------------------------- | --------------------------------------- | ------ | ---- | ----------------------- |
| showFilter     | 显示过滤按钮，配合 sortChange 使用 | Boolean                                 |        | 否   | false                   |
| filterFn       | 过滤函数                           | `((value: any, data: any) => boolean;)` |        | 否   |                         |
| filterMultiple | 是否多选过滤                       | String                                  |        | 否   | false                   |
| filters        | 过滤待选项                         | Array                                   |        | 否   | [{text: '', value: ''}] |
| (filterChange) | 过滤监听方法                       | Event                                   |        | 否   |                         |
