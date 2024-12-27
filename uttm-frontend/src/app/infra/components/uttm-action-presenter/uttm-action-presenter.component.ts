import { Component, Input, OnInit } from '@angular/core';
import UttmComponentBase from '../../base/UttmComponentBase';
import { Action } from '../../models/action.model';

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

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.categorizeActions();
  }

  private categorizeActions() {
    if (!this.customActions.length) {
      throw new Error('PLEASE PROVIDE ACTIONS FOR ' + this.type.toUpperCase());
    }

    this.customActions.forEach((action: Action) => {
      if (!Array.isArray(this.actions[action.slot])) {
        this.actions[action.slot] = [];
      } else {
        this.actions[action.slot].push(action);
      }
    });
  }
}
