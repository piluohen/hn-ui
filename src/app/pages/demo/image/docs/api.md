## Api

<!-- ['fill', 'contain', 'cover', 'none', 'scale-down'] -->

| 参数   |                                                   描述                                                   |         类型          |                     可选值                     | 必须 | 默认值   |
| ------ | :------------------------------------------------------------------------------------------------------: | :-------------------: | :--------------------------------------------: | :--: | -------- |
| fit    | 确定图片如何适应容器框， 同原生[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) |        String         | fill \| contain \| cover \| none \| scale-down |  否  | fill     |
| src    |                                                 图片路径                                                 |        String         |                                                |  是  |          |
| alt    |                                                 原生 alt                                                 |        String         |                                                |  否  |          |
| lazy   |                                                是否懒加载                                                |        Boolean        |                                                |  否  | false    |
| noData |                                          加载失败时的文案或模板                                          | string \| HTMLElement |                                                |  否  | 加载失败 |
