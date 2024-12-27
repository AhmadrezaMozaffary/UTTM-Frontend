import { Injector } from '@angular/core';
import { UserAgentType } from '../models/user.model';
import { DeviceDetectionService } from 'src/app/services/device-detection.service';
import { DEVICE_DETECTION_SERVICE } from 'src/app/services/injection-tokens';

export default class UttmComponentBase {
  protected deviceDetectionService!: DeviceDetectionService;

  constructor(injector: Injector) {
    this.deviceDetectionService = injector.get<DeviceDetectionService>(
      DEVICE_DETECTION_SERVICE
    );
  }

  protected get isDesktop(): boolean {
    return this.deviceDetectionService.getDevice() == UserAgentType.Desktop;
  }
}
