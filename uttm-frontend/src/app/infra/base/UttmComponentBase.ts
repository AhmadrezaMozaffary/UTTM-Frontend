import { Inject } from '@angular/core';
import { UserAgentType } from '../models/user.model';
import { DeviceDetectionService } from 'src/app/services/device-detection.service';

export default class UttmComponentBase {
  @Inject(DeviceDetectionService)
  protected deviceDetectionService!: DeviceDetectionService;

  private currentAgent: UserAgentType;

  constructor() {
    this.currentAgent = this.deviceDetectionService.getDevice();
  }

  protected get isDesktop(): boolean {
    return this.currentAgent == UserAgentType.Desktop;
  }
}
