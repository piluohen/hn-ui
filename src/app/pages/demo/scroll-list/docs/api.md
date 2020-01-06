## Api

| 参数        |         描述         |    类型     | 可选值 | 必须 | 默认值   |
| ----------- | :------------------: | :---------: | :----: | :--: | -------- |
| data        |       滚动数据       |    Array    |        |  是  |          |
| itemHeight  |     滚动子项高度     |   Number    |        |  否  | 60       |
| count       |     展示子项数量     |   Number    |        |  否  | 6        |
| scrollCount |     滚动子项数量     |   Number    |        |  否  | 1        |
| speed       |     子项滚动时间     |   Number    |        |  否  | 300(ms)  |
| delay       |     滚动间隔时间     |   Number    |        |  否  | 2000(ms) |
| renderItem  | 内嵌 render 子项模板 | TemplateRef |        |  否  |          |

## Event

| 事件      |     描述     |   参数   |
| --------- | :----------: | :------: |
| itemClick | 子项点击事件 | 子项数据 |
