export interface UttmButton {
  label: string;
  tooltip?: string;
  type: 'primary' | 'secondary' | 'outline';
  icon?: string;
  disable: () => boolean;
}
