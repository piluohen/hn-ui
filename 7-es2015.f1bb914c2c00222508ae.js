(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1V5W":function(n,t,e){"use strict";e.r(t),t.default="## \u9ed8\u8ba4\u4e3b\u9898\n\nHn-ui \u7684\u4e3b\u9898\u53d8\u91cf [\u53c2\u8003](https://github.com/piluohen/hn-ui/blob/master/components/style/theme.less)\n\n## \u4e3b\u9898\u5b9a\u5236\n\n\u5982\u540c ang-zorro-ant \u7ec4\u4ef6 [\u5b9a\u5236\u4e3b\u9898](https://ng.ant.design/version/7.5.x/docs/customize-theme/zh)\n\n\u5728 src \u76ee\u5f55\u4e0b\u5efa\u7acb\u4e00\u4e2a\u5355\u72ec\u7684 theme.less \u6587\u4ef6\uff0c\u5728 angular.json \u6587\u4ef6\u7684 styles \u5217\u8868\u52a0\u5165\u8be5\u6587\u4ef6\n\n```JS\n\"styles\": [\n...\n\"src/theme.less\"\n...\n]\n```\n\ntheme.less \u6837\u4f8b\u5982\u4e0b\n\n> \u5728\u6837\u4f8b\u4e2d\u901a\u8fc7\u4fee\u6539 @primary-color \u7684\u6570\u503c\u5c06 ng-zorro-antd \u4e0e hn-ui \u7684\u57fa\u7840\u8272\u4fee\u6539\u4e3a #f5222d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u6c42\u81ea\u7531\u4fee\u6539\n> \u3002\n\n```css\n/* -------- \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6 ----------- */\n@import '../node_modules/ng-zorro-antd/ng-zorro-antd.less';\n@import '../node_modules/hn-ui/hn-ui.less';\n\n/*  -------- \u81ea\u5b9a\u4e49\u53c2\u6570\u8986\u76d6 ----------- */\n@primary-color: #f5222d;\n```\n\n\u5168\u90e8\u53ef\u88ab\u81ea\u5b9a\u4e49 less \u53d8\u91cf\u53ef\u4ee5\u53c2\u8003\n[\u8fd9\u91cc](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less)\n"},is50:function(n,t,e){"use strict";e.r(t),e.d(t,"ThemeModule",(function(){return u}));var s=e("ADsi"),o=e("tyNb"),r=e("fXoL"),i=e("lR5k");const c=[{path:"",component:(()=>{class n{constructor(){this.apiMarkdown=e("1V5W").default}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Nb({type:n,selectors:[["app-theme"]],decls:3,vars:1,consts:[[1,"layout-content"]],template:function(n,t){1&n&&(r.Zb(0,"div",0),r.Zb(1,"markdown"),r.Lc(2),r.Yb(),r.Yb()),2&n&&(r.Db(2),r.Mc(t.apiMarkdown))},directives:[i.a],styles:[""]}),n})(),data:{breadcrumb:"\u5b9a\u5236\u4e3b\u9898"}}];let a=(()=>{class n{}return n.\u0275mod=r.Rb({type:n}),n.\u0275inj=r.Qb({factory:function(t){return new(t||n)},imports:[[o.g.forChild(c)],o.g]}),n})(),u=(()=>{class n{}return n.\u0275mod=r.Rb({type:n}),n.\u0275inj=r.Qb({factory:function(t){return new(t||n)},imports:[[s.a,a]]}),n})()}}]);