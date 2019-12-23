import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ADDRESS_LIST } from './share/util/constants';
import { Utils } from './share/util/utils';

@Injectable()
export class AuthService {
  sessionId: string;

  constructor() {

  }

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  getSessionId(): string {
    this.sessionId = Cookie.get('access_token');
    // this.sessionId = 'E-5V3_dcpttfuY1gZEB9PffNvnriBGgOZwz1dHV3jvE';
    return this.sessionId;
  }

  isLoggedIn(): boolean {
    return this.getSessionId() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
