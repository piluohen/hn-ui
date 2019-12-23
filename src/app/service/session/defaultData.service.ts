import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { getParentValuesUrl } from '../url/common';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {
  settledType: any = [];

  constructor(private http: HttpService) {}

  initData() {
    return new Promise((resolve, reject) => {
      if (Session.get('settledType')) {
        this.getSessionData();
        resolve(this.settledType);
      } else {
        this.getData().then(data => {
          resolve(data);
        });
      }
    });
  }

  getData() {
    const params = {
      parentValues: 'SETTLED_TYPE'
    };
    return new Promise((resolve, reject) => {
      this.http.get(getParentValuesUrl, params).subscribe(res => {
        if (res && res['data']) {
          const data = res['data'].list;
          this.settledType = this.filterData(data.SETTLED_TYPE);
          Session.set('settledType', this.settledType);
          resolve(this.settledType);
        } else {
          reject();
        }
      });
    });
  }

  filterData(arr: any[]) {
    return arr.map(item => {
      return {
        label: item.name,
        value: item.value
      };
    });
  }

  getSessionData() {
    this.settledType = Session.get('settledType');
  }
}
