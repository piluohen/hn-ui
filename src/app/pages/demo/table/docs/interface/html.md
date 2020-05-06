```HTML
<div class="table-operation">
  <div class="table-operation-left">
    <hn-export></hn-export>
    <hn-table-msg [check]="numberOfChecked" (clear)="handleClear()"></hn-table-msg>
  </div>
  <hn-search
    [formList]="formList"
    [params]="params"
    [itemRender]="{inputTemp: inputTemp}"
    (search)="handleSearch($event)">
    <ng-template #inputTemp>
      <input nz-input [(ngModel)]="params.input1" placeholder="render input">
    </ng-template>
  </hn-search>
</div>
<hn-table
  #table
  [columns]="columns"
  [api]="getListApi"
  [params]="params"
  [scroll]="{x: '600px'}"
  [showPagination]="true"
  [render]="{linkTemp: linkTemp, operateTemp: operateTemp}"
  (checkChange)="handleCheckChange($event)">
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
