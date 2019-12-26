```JS
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.less']
})
export class ExportComponent implements OnInit {
  exportApi: any;

  params = {};

  constructor(private http: HttpService) {
    this.exportApi = () => {
      return this.http.get('http://test.mgt.campus.huanuo-nsb.com/ipark-company/outputValue/excel/export', this.params);
    };
  }

  ngOnInit() {}
}

```
