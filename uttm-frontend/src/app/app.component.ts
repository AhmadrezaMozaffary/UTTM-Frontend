import { Component, Injector, OnInit } from '@angular/core';
import UttmComponentBase from './infra/base/UttmComponentBase';
import { UttmAction } from './infra/models/action.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends UttmComponentBase implements OnInit {
  title = 'uttm-frontend';

  navbarActions: UttmAction[] = [];
  footerActions: UttmAction[] = [];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initToolbarActions();
    this.initFooterActions();
  }

  private initToolbarActions(): void {}

  private initFooterActions(): void {}
}
