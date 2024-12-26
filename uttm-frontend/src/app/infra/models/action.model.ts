export interface Action {
  slot: ActionSlot;
  tooltip: string;
  name: string;
  icon: string;
}

export type ActionSlot = 'start' | 'middle' | 'end';
