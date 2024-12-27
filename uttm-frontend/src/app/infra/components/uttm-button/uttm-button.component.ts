import { Component, Input } from '@angular/core';
import { UttmButton } from '../../models/button.model';

@Component({
  selector: 'uttm-button',
  templateUrl: './uttm-button.component.html',
  styleUrls: ['./uttm-button.component.scss'],
})
export class UttmButtonComponent {
  @Input() config!: UttmButton;
}
