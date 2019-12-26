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
