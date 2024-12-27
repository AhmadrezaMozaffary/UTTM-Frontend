import { Injector } from '@angular/core';
import { UserAgentType } from '../models/user.model';
import { DeviceDetectionService } from 'src/app/services/device-detection.service';
import { DEVICE_DETECTION_SERVICE } from 'src/app/services/injection-tokens';

export default class UttmComponentBase {
  protected deviceDetectionService!: DeviceDetectionService;

  private currentAgent: UserAgentType;

  constructor(injector: Injector) {
    this.deviceDetectionService = injector.get<DeviceDetectionService>(
      DEVICE_DETECTION_SERVICE
    );
    this.currentAgent = this.deviceDetectionService.getDevice();
  }

  protected get isDesktop(): boolean {
    return this.currentAgent == UserAgentType.Desktop;
  }
}
