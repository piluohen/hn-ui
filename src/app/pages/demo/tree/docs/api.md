## Api

| 参数            | 描述                                                         | 类型                                                      | 可选值 | 必须 | 默认值 |
| --------------- | ------------------------------------------------------------ | --------------------------------------------------------- | ------ | ---- | ------ |
| hnData          | 传入数据                                                     | Array                                                     |        | 是   | []     |
| hnBlockNode     | 是否节点占据一行                                             | Boolean                                                   |        | 否   | false  |
| hnCheckable     | 节点前添加 Checkbox 复选框                                   | Boolean                                                   |        | 否   | false  |
| hnShowExpand    | 节点前添加展开图标                                           | Boolean                                                   |        | 否   | true   |
| hnShowLine      | 是否展示连接线                                               | Boolean                                                   |        | 否   | false  |
| hnExpandedIcon  | 自定义展开图标                                               | Boolean                                                   |        | 否   | false  |
| hnShowIcon      | 是否展示 TreeNode title 前的图标，没有默认样式               | Boolean                                                   |        | 否   | false  |
| hnAsyncData     | 是否异步加载(显示加载状态)                                   | Boolean                                                   |        | 否   | false  |
| hnDraggable     | 设置节点可拖拽（IE>8                                         | Boolean                                                   |        | 否   | false  |
| hnMultiple      | 支持点选多个节点（节点本身）                                 | Boolean                                                   |        | 否   | false  |
| hnHideUnMatched | 搜索隐藏未匹配的节点                                         | Boolean                                                   |        | 否   | false  |
| hnCheckStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | Boolean                                                   |        | 否   | false  |
| hnExpandAll     | 默认展开所有树节点                                           | Boolean                                                   |        | 否   | false  |
| hnExpandedKeys  | 展开指定的树节点                                             | string[]                                                  |        | 否   | []     |
| hnCheckedKeys   | 指定选中复选框的树节点                                       | string[]                                                  |        | 否   | []     |
| hnSelectedKeys  | 指定选中的树节点                                             | string[]                                                  |        | 否   | []     |
| hnSearchValue   | 按需筛选树高亮节点                                           | string                                                    |        | 否   | ''     |
| hnBeforeDrop    | drop 前二次校验,允许用户自行决定是否允许放置                 | (confirm: nzFormatBeforeDropEvent) => Observable<boolean> |        | 否   | --     |
| hnAccordion     | 是否开启手风琴模式                                           | Boolean                                                   |        | 否   | false  |
| hnNodeTitle     | 设置 node 子节点 title 的 key 属性                           | string                                                    |        | 否   | title  |
| hnNodeKey       | 设置 node 子节点 key 的 key 属性(唯一标识)                   | string                                                    |        | 否   | key    |

## Event

| 名称                | 描述                                      | 返回值 |
| ------------------- | ----------------------------------------- | ------ |
| hnClick             | 点击树节点触发                            | -      |
| hnDblClick          | 双击树节点触发                            | -      |
| hnContextMenu       | 右键树节点触发                            | -      |
| hnCheckBoxChange    | 点击树节点 Checkbox 触发                  | -      |
| hnExpandChange      | 点击展开树节点图标触发                    | -      |
| hnSearchValueChange | 搜索节点时调用(与 hnSearchValue 配合使用) | -      |
| hnOnDragStart       | 开始拖拽时调用                            | -      |
| hnOnDragEnter       | dragenter 触发时调用                      | -      |
| hnOnDragOver        | dragover 触发时调用                       | -      |
| hnOnDragLeave       | dragleave 触发时调用                      | -      |
| hnOnDrop            | drop 触发时调用                           | -      |
| hnOnDragEnd         | dragend 触发时调用                        | -      |

## 其他

参考 [hn-tree](https://ng.ant.design/version/7.5.x/components/tree/zh)
