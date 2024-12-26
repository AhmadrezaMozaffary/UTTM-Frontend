import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import UttmComponentBase from './infra/base/UttmComponentBase';
import { Action } from './infra/models/action.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends UttmComponentBase implements OnInit {
  title = 'uttm-frontend';

  navbarActions: Action[] = [];
  footerActions: Action[] = [];

  constructor(userService: UserService) {
    super(userService);
  }

  ngOnInit(): void {
    this.initToolbarActions();
    this.initFooterActions();
  }

  private initToolbarActions(): void {}

  private initFooterActions(): void {}
}
