```HTML
<hn-scroll-list [data]="list" [renderItem]="renderItem" [count]="6" [itemHeight]="60" [delay]="2000">
  <ng-template #renderItem let-item>
    <div class="list-item">
      <span>{{item.title}}</span>
      <span>{{item.desc}}</span>
    </div>
  </ng-template>
</hn-scroll-list>
```
