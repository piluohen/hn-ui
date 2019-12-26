```JS
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('table') table: any;
  columns: any[] = [{
      title: '名称',
      key: 'name'
    },
    {
      title: '性别',
      key: 'gender'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '出生日期',
      key: 'createTime'
    },
    {
      title: '链接',
      key: 'link',
      renderKey: 'linkTemp'
    },
    {
      title: '操作',
      right: '0px',
      width: '80px',
      renderKey: 'operateTemp'
    }
  ];

  tableData: any[] = [];

  params: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    const params: any = {
      pageSize: 10,
      pageNo: 1
    };
    this.getListApi(params).subscribe((res: any) => {
      if (res.success) {
        const data = res.data.list;
        this.tableData = data;
      }
    });
  }

  handleView(scope: any = {}): void {
    window.open(scope.data[scope.item.key]);
  }

  handleEdit(type: string, data: any = {}) {
    console.log(type, data);
  }
}
```
