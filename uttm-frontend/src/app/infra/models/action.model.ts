export interface UttmAction {
  slot: UttmActionSlot;
  tooltip: string;
  name: string;
  icon: string;
}

export type UttmActionSlot = 'start' | 'middle' | 'end';
