import { Component, Input } from '@angular/core';

@Component({
  selector: 'uttm-icon',
  templateUrl: './uttm-icon.component.html',
  styleUrls: ['./uttm-icon.component.scss'],
})
export class UttmIconComponent {
  @Input() type: 'svg' | 'font' | 'url' = 'svg'; // Default to SVG
  @Input() iconName: string = ''; // Name of the icon or file
  @Input() size: string = '24px'; // Default size
  @Input() color: string = '#000'; // Default color
  @Input() url: string = ''; // For URL-based icons

  iconUrl: string = '';

  ngOnInit() {
    if (this.type === 'svg') {
      this.iconUrl = `assets/icons/${this.iconName}.svg`; // Path to SVG icons
    } else if (this.type === 'url' && this.url) {
      this.iconUrl = this.url;
    }
  }
}
