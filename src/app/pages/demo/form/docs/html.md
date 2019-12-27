```HTML
<hn-form
  #form
  [formList]="formList"
  [(params)]="params"
  [render]="{inputTemp: inputTemp}"
  (submit)="handleSubmit($event)">
  <ng-template #inputTemp>
    <input nz-input [(ngModel)]="params.input1" placeholder="render input">
  </ng-template>
</hn-form>

<hn-button (click)="handleReset()">重置</hn-button>
<hn-button class="ml10" (hnClick)="handleClick($event)" type="primary">提交</hn-button>

<p class="code">{{jsonParams}}</p>

```
