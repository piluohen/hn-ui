```HTML
<!-- HTML -->
<hn-checkbox-group [options]="options" [(ngModel)]="value" (ngModelChange)="handleChange($event)">
</hn-checkbox-group>
```

```JS
// JavaScript
options: any = [];

value: any = ['A', 'E'];

constructor() {
  this.options = ['A', 'B', 'C', 'D', 'E', 'F'].map(item => {
    return {
      label: `${item}选项` ,
      value: item
    };
  });
}

handleChange(data: any): void {
  console.log(data);
}
```
