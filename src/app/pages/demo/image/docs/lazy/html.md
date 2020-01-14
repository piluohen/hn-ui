```HTML
<h2>懒加载</h2>
<div class="image-lazy-container" #divTarget>
  <div class="image-lazy-list">
    <div class="image-lazy-item" *ngFor="let item of imgList; index as index">
      <hn-image
        [src]="item.url"
        [alt]="item.alt"
        [lazy]="item.lazy"
        [hnTarget]="divTarget">
      </hn-image>
    </div>
  </div>
</div>
```
