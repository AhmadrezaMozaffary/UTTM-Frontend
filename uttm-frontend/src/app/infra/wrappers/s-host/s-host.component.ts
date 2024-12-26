import { Component } from '@angular/core';
import UttmComponentBase from '../../base/UttmComponentBase';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 's-host',
  templateUrl: './s-host.component.html',
  styleUrls: ['./s-host.component.scss'],
})
export class SHostComponent extends UttmComponentBase {
  constructor(userService: UserService) {
    super(userService);
  }
}
