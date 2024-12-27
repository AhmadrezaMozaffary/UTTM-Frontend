import { Component, Injector } from '@angular/core';
import UttmComponentBase from '../../base/UttmComponentBase';

@Component({
  selector: 's-host',
  templateUrl: './s-host.component.html',
  styleUrls: ['./s-host.component.scss'],
})
export class SHostComponent extends UttmComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
