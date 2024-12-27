import { UttmButton } from './button.model';

export interface UttmAction {
  slot: UttmActionSlot;
  renderHint: UttmActionRenderHint;
  uttmButtonInfo?: UttmButton;
}

export type UttmActionSlot = 'start' | 'middle' | 'end';

export type UttmActionRenderHint = 'uttm-button';
