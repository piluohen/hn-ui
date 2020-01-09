```HTML
<!-- nz-tree -->
<nz-tree
  nzNoAnimation
  #nzTreeComponent
  [nzData]="nodes"
  [nzCheckable]="false"
  [nzSearchValue]="searchValue"
  (nzSearchValueChange)="handleSearchValue($event)"
  (nzCheckBoxChange)="handleCheckBoxChange($event)"
  (nzClick)="handleClick($event)"
  (nzExpandChange)="handleExpandChange($event)">
</nz-tree>

<!-- hn-tree -->
<hn-tree
  nzNoAnimation
  #hnTreeComponent
  [hnData]="nodes"
  [hnCheckable]="false"
  [hnHideUnMatched]="true"
  [hnAccordion]="accordion"
  [hnSearchValue]="searchValue1"
  hnNodeTitle="title"
  hnNodeKey="key"
  (hnSearchValueChange)="handleSearchValue($event)"
  (hnCheckBoxChange)="handleCheckBoxChange($event)"
  (hnClick)="handleClick($event)"
  (hnExpandChange)="handleExpandChange($event)">
</hn-tree>
```
