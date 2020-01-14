```JS
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  fit = 'fill';

  fitTabs: string[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];

  singleImg = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

  constructor() {}

  ngOnInit() {}
}

```
