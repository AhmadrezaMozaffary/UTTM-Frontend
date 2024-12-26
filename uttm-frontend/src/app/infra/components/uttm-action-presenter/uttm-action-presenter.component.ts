import { Component, Input, OnInit } from '@angular/core';
import UttmComponentBase from '../../base/UttmComponentBase';
import { UserService } from 'src/app/services/user.service';
import { Action, ActionSlot } from '../../models/action.model';

@Component({
  selector: 'uttm-action-presenter',
  templateUrl: './uttm-action-presenter.component.html',
  styleUrls: ['./uttm-action-presenter.component.scss'],
})
export class UttmActionPresenterComponent
  extends UttmComponentBase
  implements OnInit
{
  @Input('actions') customActions: Action[] = [];
  @Input('type') type: 'navbar' | 'footer' = 'navbar';

  actions: { [slot: string]: Action[] } = {};

  constructor(userService: UserService) {
    super(userService);
  }

  ngOnInit(): void {
    this.categorizeActions();
  }

  private categorizeActions() {
    if (!this.customActions.length) {
      throw new Error('PLEASE PROVIDE ACTIONS FOR NAVBAR');
    }

    this.customActions.forEach((action: Action) => {
      this.actions[action.slot].push(action);
    });
  }
}
