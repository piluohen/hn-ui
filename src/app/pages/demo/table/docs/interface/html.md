```HTML
<hn-table #table [columns]="columns" [api]="getListApi" [params]="params" [scroll]="{x: '600px'}" [showPagination]="true" [showSelect]="true" [render]="{linkTemp: linkTemp, operateTemp: operateTemp}">
  <ng-template #linkTemp let-scope>
    <a class="color-primary" (click)="handleView(scope)">{{scope.data[scope.item.key]}}</a>
  </ng-template>
  <ng-template #operateTemp let-scope>
    <div class="table-btns">
      <div class="table-btn" (click)="handleEdit('edit', scope.data)">编辑</div>
    </div>
  </ng-template>
</hn-table>
```
