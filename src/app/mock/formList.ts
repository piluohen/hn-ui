import { Validators } from '@angular/forms';

const items = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
];

export const treeList = [
  {
    title: 'parent 1',
    key: '100',
    children: [
      {
        title: 'parent 1-0',
        key: '1001',
        children: [
          { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
          { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
        ]
      },
      {
        title: 'parent 1-1',
        key: '1002',
        children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
      }
    ]
  },
  {
    title: 'parent 2',
    key: '200',
    children: [
      {
        title: 'parent 2-0',
        key: '2001',
        children: [
          { title: 'leaf 2-0-0', key: '20010', isLeaf: true },
          { title: 'leaf 2-0-1', key: '20011', isLeaf: true }
        ]
      }
    ]
  }
];

export const formList = [
  {
    label: '输入框',
    key: 'input',
    type: 'input',
    required: true,
    validators: [Validators.required],
    errorMsg: '请输入'
  },
  {
    label: '数字输入框',
    key: 'inputNumber',
    type: 'input-number',
    required: true,
    validators: [Validators.required],
    errorMsg: '请输入'
  },
  { label: '单选框', key: 'radio', type: 'radio', disabled: true, options: [...items] },
  { label: '单选框按钮', key: 'radioBtn', type: 'radio-button', options: [...items] },
  { label: '多选框', key: 'checkbox', type: 'checkbox', options: [...items] },
  { label: '评分', key: 'rate', type: 'rate' },
  { label: '选择框', key: 'select', type: 'select', options: [...items] },
  { label: '树选择框', key: 'treeSelect', type: 'tree-select', options: [...treeList] },
  {
    label: '级联选择',
    key: 'cascader',
    type: 'cascader',
    options: [...treeList],
    nzValueProperty: 'key',
    nzLabelProperty: 'title'
  },
  { label: '滑动输入条', key: 'slider', type: 'slider' },
  { label: '开关', key: 'switch', type: 'switch' },
  { label: '年', key: 'year', type: 'year' },
  { label: '月', key: 'month', type: 'month' },
  { label: '周', key: 'week', type: 'week' },
  { label: '日', key: 'date', type: 'date' },
  { label: '时刻', key: 'time', type: 'time' },
  { label: '时间范围', key: 'range', type: 'range', col: 6 },
  {
    label: '子项',
    col: 12,
    children: [
      { label: '输入框', key: 'inputChildren', type: 'input', renderKey: 'inputTemp' },
      { label: '数字输入框', key: 'inputNumberChildren', type: 'input-number' }
    ]
  }
];
