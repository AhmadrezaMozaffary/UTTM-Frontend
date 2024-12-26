import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import UttmComponentBase from './infra/base/UttmComponentBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends UttmComponentBase implements OnInit {
  title = 'uttm-frontend';

  constructor(userService: UserService) {
    super(userService);
  }

  ngOnInit(): void {}
}
