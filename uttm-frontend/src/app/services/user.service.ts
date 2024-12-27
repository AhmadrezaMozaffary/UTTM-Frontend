import { Injectable } from '@angular/core';
import { UserAgentType } from '../infra/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getDevice(): UserAgentType {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (this.isMobile(userAgent)) {
      return UserAgentType.Mobile;
    }

    if (this.isTablet(userAgent)) {
      return UserAgentType.Tablet;
    }

    if (this.isDesktop(userAgent)) {
      return UserAgentType.Desktop;
    }

    return UserAgentType.Unknown;
  }

  private isMobile(userAgent: string): boolean {
    const mobilePatterns = [
      'iphone',
      'ipod',
      'android',
      'blackberry',
      'windows phone',
      'opera mini',
      'mobile',
    ];
    return mobilePatterns.some((pattern) => userAgent.includes(pattern));
  }

  private isTablet(userAgent: string): boolean {
    const tabletPatterns = [
      'ipad',
      'android 3.0',
      'kindle',
      'silk',
      'playbook',
      'tablet',
    ];
    return tabletPatterns.some((pattern) => userAgent.includes(pattern));
  }

  private isDesktop(userAgent: string): boolean {
    const desktopPatterns = [
      'windows nt',
      'macintosh',
      'linux',
      'x11',
      'cros', // Chrome OS
    ];
    return desktopPatterns.some((pattern) => userAgent.includes(pattern));
  }
}
