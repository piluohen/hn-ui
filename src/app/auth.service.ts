import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class AuthService {
  sessionId: string;

  constructor() {}

  getSessionId(): string {
    this.sessionId = Cookie.get('access_token');
    // this.sessionId = 'E-5V3_dcpttfuY1gZEB9PffNvnriBGgOZwz1dHV3jvE';
    return this.sessionId;
  }
}

export const AUTH_PROVIDERS: Array<any> = [{ provide: AuthService, useClass: AuthService }];
