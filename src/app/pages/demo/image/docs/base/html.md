```HTML
<h2>示例</h2>
<div class="form-tab">
  <nz-radio-group class="form-tab-item" [(ngModel)]="fit">
    <label
      *ngFor="let item of fitTabs"
      nz-radio-button
      [nzValue]="item">{{item}}</label>
  </nz-radio-group>
</div>
<div class="image-list">
  <div class="image-list-item">
    <hn-image [src]="singleImg" [fit]="fit"></hn-image>
  </div>
</div>
```
