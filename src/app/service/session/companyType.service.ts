import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Session } from './session';
import { getCompanyTypeListUrl, getCompanyInitUrl } from '../url/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService {

  companyTypeList: any = [];

  constructor(
    private http: HttpService,
  ) { }

  initData() {
    return new Promise((resolve, reject) => {
      if (Session.get('companyTypeList')) {
        this.getSessionData();
        resolve(this.companyTypeList);
      } else {
        this.getData().then(data => {
          resolve(data);
        });
      }
    });
  }

  getData() {
    return new Promise((resolve, reject) => {
      this.http.get(getCompanyTypeListUrl).subscribe((res) => {
        if (res && res['data']) {
          const data = res['data'].list;
          this.companyTypeList = data;
          Session.set('companyTypeList', data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  }

  getSessionData() {
    this.companyTypeList = Session.get('companyTypeList');
  }
}
