```HTML
<!-- HTML -->
<form nz-form [formGroup]="validateForm" nzLayout="horizontal">
  <nz-form-item nzFlex>
    <nz-form-label nzRequired>多选框</nz-form-label>
    <nz-form-control>
      <hn-checkbox-group [options]="options" formControlName="checkbox" (ngModelChange)="handleChange($event)">
      </hn-checkbox-group>
    </nz-form-control>
  </nz-form-item>
</form>
<div style="margin-bottom: 20px;">form值：{{validateForm.value.checkbox}}</div>
<button nz-button nzType="primary" (click)="handleSave()">提交</button>
```

```JS
// JavaScript
options: any = [];

value: any = ['A', 'E'];

constructor(
  private fb: FormBuilder,
) {
  this.validateForm = this.fb.group({
    checkbox: [this.value]
  });
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

handleSave(): void {
  console.log(this.validateForm.value);
}
```
