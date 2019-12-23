<!-- @Input() data: any[] = [];

  @Input() api: any;

  @Input() params: any;

  @Input() columns: any;

  @Input() totalKey: any = 'total';

  @Input() contentKey: any = 'list';

  @Input() showSelect = true;

  @Input() showPagination = true;

  @Input() scroll: any{};

  @Input() footer: any;

  @Input() bordered = false;

  @Input() render: any = {};
  @Output() checkChange: EventEmitter<any> = new EventEmitter(); -->

## Api

| 参数           | 描述                                             | 类型                        | 可选值 | 必须  | 默认值 |
| -------------- | ------------------------------------------------ | --------------------------- | ------ | ----- | ------ |
| data           | 传入数据，与 api 二选一传入                      | Array                       |        | true  | []     |
| api            | 数据请求方法，与 data 二选一传入                 | Function                    |        | true  | --     |
| params         | 传入参数                                         | Object                      |        | false | {}     |
| columns        | 列数据                                           | Array                       |        | true  | []     |
| totalKey       | 总数据字段的 key                                 | String                      |        | false | total  |
| contentKey     | 数据内容的 key                                   | String                      |        | false | list   |
| showSelect     | 是否使用多选功能                                 | Boolean                     |        | false | true   |
| showPagination | 是否分页                                         | Boolean                     |        | false | true   |
| bordered       | 是否带 border 边框                               | Boolean                     |        | false | false  |
| scroll         | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度 | Object                      |        | false | {}     |
| footer         | 表格尾部                                         | string ｜ TemplateRef<void> |        | false | --     |
| render         | 模板对象                                         | Object                      |        | false | {}     |

## Event

| 名称        | 描述           | 返回值 |
| ----------- | -------------- | ------ |
| checkChange | 多选项改变方法 | -      |
