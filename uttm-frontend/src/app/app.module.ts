import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { INFRA_WRAPPERS } from './infra/wrappers';
import { INFRA_COMPONENTS } from './infra/components';
import { COMPONENTS } from './components';
import { DeviceDetectionService } from './services/device-detection.service';
import { DEVICE_DETECTION_SERVICE } from './services/injection-tokens';

@NgModule({
  declarations: [AppComponent, INFRA_WRAPPERS, INFRA_COMPONENTS, COMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: DEVICE_DETECTION_SERVICE, useClass: DeviceDetectionService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
