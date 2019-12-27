```HTML
整数：
<hn-countup [endVal]="value"></hn-countup>
保留小数位：
<hn-countup [endVal]="value1" [decimalPlaces]="2"></hn-countup>
```

## Api

| 参数          |     描述     |  类型  | 可选值 | 必须 | 默认值   |
| ------------- | :----------: | :----: | :----: | :--: | -------- |
| startVal      |    开始值    | Number |        |  否  | 0        |
| endVal        |    结束值    | Number |        |  是  | 0        |
| decimalPlaces |    小数位    | Number |        |  否  | 0        |
| duration      | 动画持续时间 | Number |        |  否  | 2000(ms) |

## Event

| 名称  |     描述     | 返回值 |
| ----- | :----------: | ------ |
| ready | 动画结束返回 | -      |
