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
    disabled: false,
    required: true,
    validators: [Validators.required, Validators.maxLength(5)],
    errorMsg: '请输入不超过5个字符'
  },
  {
    label: '输入域',
    key: 'textarea',
    type: 'textarea',
    rows: 4,
    disabled: false,
    required: true,
    validators: [Validators.required, Validators.maxLength(5)],
    errorMsg: '请输入不超过5个字符'
  },
  {
    label: '数字输入框',
    key: 'inputNumber',
    type: 'input-number',
    disabled: false,
    required: true,
    validators: [Validators.required],
    errorMsg: '请输入'
  },
  {
    label: '单选框',
    key: 'radio',
    type: 'radio',
    disabled: false,
    options: [...items]
  },
  {
    label: '单选框按钮',
    key: 'radioBtn',
    type: 'radio-button',
    options: [...items],
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '多选框',
    key: 'checkbox',
    type: 'checkbox',
    options: [...items],
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '评分',
    key: 'rate',
    type: 'rate',
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '选择框',
    key: 'select',
    type: 'select',
    options: [...items],
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '树选择框',
    key: 'treeSelect',
    type: 'tree-select',
    options: [...treeList],
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '级联选择',
    key: 'cascader',
    type: 'cascader',
    options: [...treeList],
    nzValueProperty: 'key',
    nzLabelProperty: 'title'
  },
  {
    label: '滑动输入条',
    key: 'slider',
    type: 'slider',
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '开关',
    key: 'switch',
    type: 'switch',
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  { label: '年', key: 'year', type: 'year', required: true, validators: [Validators.required], errorMsg: '请选择' },
  { label: '月', key: 'month', type: 'month', required: true, validators: [Validators.required], errorMsg: '请选择' },
  { label: '周', key: 'week', type: 'week', required: true, validators: [Validators.required], errorMsg: '请选择' },
  { label: '日', key: 'date', type: 'date', required: true, validators: [Validators.required], errorMsg: '请选择' },
  { label: '时刻', key: 'time', type: 'time', required: true, validators: [Validators.required], errorMsg: '请选择' },
  {
    label: '时间范围',
    key: 'range',
    type: 'range',
    col: 6,
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  },
  {
    label: '子项',
    col: 12,
    children: [
      {
        label: '输入框',
        key: 'inputChildren',
        type: 'input',
        renderKey: 'inputTemp',
        required: true,
        validators: [Validators.required],
        errorMsg: '请选择'
      },
      {
        label: '',
        key: 'inputNumberChildren',
        type: 'input-number',
        required: true,
        validators: [Validators.required],
        errorMsg: '请选择'
      }
    ],
    required: true,
    validators: [Validators.required],
    errorMsg: '请选择'
  }
];
