```HTML
<hn-table
  #table
  size="default"
  [columns]="columns"
  [data]="tableData"
  [params]="{}"
  [scroll]="{x: '1000px'}"
  (checkChange)="handleCheckChange($event)"
  (sortChange)="handleSortChange($event)"
  [render]="{linkThTemp: linkThTemp, linkTemp: linkTemp}">
  <ng-template #linkTemp let-scope>
    <a class="color-primary" (click)="handleView(scope)">{{scope.data[scope.item.key]}}</a>
  </ng-template>
  <ng-template #linkThTemp let-scope>
    <span>链接th render</span>
  </ng-template>
</hn-table>
```
