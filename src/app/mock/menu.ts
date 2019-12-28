export const menuList = [
  {
    title: '如何使用',
    icon: 'question-circle',
    path: '/usage'
  },
  {
    title: '定制主题',
    icon: 'meh',
    path: '/theme'
  },
  {
    title: '组件',
    icon: 'dashboard',
    open: false,
    children: [
      { title: 'color', path: '/demo/color' },
      { title: 'hn-button', path: '/demo/hn-button' },
      { title: 'hn-countup', path: '/demo/hn-countup' },
      { title: 'hn-checkbox-group', path: '/demo/hn-checkbox-group' },
      { title: 'hn-preview & hn-img-list', path: '/demo/hn-preview' },
      { title: 'hn-scroll-list', path: '/demo/hn-scroll-list' },
      { title: 'hn-detail-list', path: '/demo/hn-detail-list' },
      { title: 'hn-form', path: '/demo/hn-form' },
      { title: 'hn-table', path: '/demo/hn-table' },
      { title: 'hn-export', path: '/demo/hn-export' },
      { title: 'hn-search', path: '/demo/hn-search' }
    ]
  }
];
