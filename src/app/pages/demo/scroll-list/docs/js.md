```JS
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.scss']
})
export class ScrollListComponent implements OnInit {

  list: any = [];

  constructor() {}

  ngOnInit() {
    this.createData();
  }

  createData() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        title: `标题 ${i}` ,
        desc: '描述'
      });
    }
  }
}
```
