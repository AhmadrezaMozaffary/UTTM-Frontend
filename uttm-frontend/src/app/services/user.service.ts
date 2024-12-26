import { Injectable } from '@angular/core';
import { UserAgentType } from '../infra/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getDevice(): UserAgentType {
    const userAgent = window.navigator.userAgent;

    if (
      userAgent.includes('Win') ||
      userAgent.includes('Mac') ||
      userAgent.includes('X11') ||
      userAgent.includes('Linux')
    ) {
      return UserAgentType.Desktop;
    }

    return UserAgentType.Mobile;
  }
}
