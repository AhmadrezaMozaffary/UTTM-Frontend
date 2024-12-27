import { Component, Injector, Input, OnInit } from '@angular/core';
import UttmComponentBase from '../../base/UttmComponentBase';
import { UttmAction } from '../../models/action.model';

@Component({
  selector: 'uttm-action-presenter',
  templateUrl: './uttm-action-presenter.component.html',
  styleUrls: ['./uttm-action-presenter.component.scss'],
})
export class UttmActionPresenterComponent
  extends UttmComponentBase
  implements OnInit
{
  @Input('actions') actions: UttmAction[] = [];
  @Input('type') type: 'navbar' | 'footer' = 'navbar';

  constructor(injetor: Injector) {
    super(injetor);
  }

  ngOnInit(): void {
    this.initActions();
  }

  private initActions() {
    if (!this.actions.length) {
      throw new Error('PLEASE PROVIDE ACTIONS FOR ' + this.type.toUpperCase());
    }
  }
}
