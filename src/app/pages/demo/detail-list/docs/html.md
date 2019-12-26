```HTML
<hn-detail-list [columns]="columns" [data]="data" colon="" [render]="{linkTemp: linkTemp}">
  <ng-template #linkTemp let-scope>
    <a [href]="scope.value" target="_blank">{{scope.value}}</a>
  </ng-template>
</hn-detail-list>
```
