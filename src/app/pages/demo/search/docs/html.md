```HTML
<hn-search [formList]="formList" (search)="handleSearch($event)" [itemRender]="{inputTemp: inputTemp}">
  <ng-template #inputTemp>
    <input nz-input [(ngModel)]="params.input1" placeholder="render input">
  </ng-template>
</hn-search>
```
