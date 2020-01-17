```HTML
<hn-table
  #table
  [columns]="columns"
  [data]="tableData"
  [params]="{}"
  [scroll]="{x: '600px', y: '240px'}"
  [showPagination]="false"
  [showSelect]="false"
  [virtualScroll]="true"
  (virtualChange)="handleVirtualChange($event)">
</hn-table>
```
