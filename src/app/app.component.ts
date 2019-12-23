import { Component, OnInit } from '@angular/core';
import { DefaultDataService } from './service/session/defaultData.service';
import { CompanyTypeService } from './service/session/companyType.service';
import { HttpSpinService } from './share/http-spin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  spinning = false;

  constructor(
    private defaultDataService: DefaultDataService,
    private companyTypeService: CompanyTypeService,
    private spinService: HttpSpinService
  ) {
    // this.defaultDataService.initData();
    // this.companyTypeService.initData();
  }

  ngOnInit() {
    // this.spinService.subscribe(spinning => (this.spinning = spinning));
  }
}
