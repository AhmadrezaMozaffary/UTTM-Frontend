import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'uttm-tooltip',
  template: '',
  styleUrls: ['./uttm-tooltip.component.scss'],
})
export class UttmTooltipComponent {
  @Input() targetRef!: HTMLElement;
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() openDelay: number = 0;
  @Input() closeDelay: number = 0;
  @Input() triggerOn: 'hover' | 'click' = 'hover';
  @Input() text: string = '⚠ TOOLTIP TEXT NOT DEFINED ⚠';

  tooltipVisible = false;
  tooltipElement!: HTMLElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initTooltip();
    if (this.triggerOn === 'hover') {
      this.renderer.listen(
        this.targetRef,
        'mouseenter',
        this.showTooltip.bind(this)
      );
      this.renderer.listen(
        this.targetRef,
        'mouseleave',
        this.hideTooltip.bind(this)
      );
    } else if (this.triggerOn === 'click') {
      this.renderer.listen(
        this.targetRef,
        'click',
        this.toggleTooltip.bind(this)
      );
    }
  }

  initTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    const textNode = this.renderer.createText(this.text || ''); // اضافه کردن متن
    this.renderer.appendChild(this.tooltipElement, textNode);

    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  setPosition() {
    const targetRect = this.targetRef.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();

    let top, left;
    switch (this.placement) {
      case 'top':
        top = targetRect.top - tooltipRect.height + window.scrollY;
        left =
          targetRect.left +
          (targetRect.width - tooltipRect.width) / 2 +
          window.scrollX;
        break;
      case 'bottom':
        top = targetRect.bottom + window.scrollY;
        left =
          targetRect.left +
          (targetRect.width - tooltipRect.width) / 2 +
          window.scrollX;
        break;
      case 'left':
        top =
          targetRect.top +
          (targetRect.height - tooltipRect.height) / 2 +
          window.scrollY;
        left = targetRect.left - tooltipRect.width + window.scrollX;
        break;
      case 'right':
        top =
          targetRect.top +
          (targetRect.height - tooltipRect.height) / 2 +
          window.scrollY;
        left = targetRect.right + window.scrollX;
        break;
      default:
        top = targetRect.bottom + window.scrollY;
        left = targetRect.left + window.scrollX;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }

  showTooltip() {
    setTimeout(() => {
      this.tooltipVisible = true;
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'visible');
      this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
      this.setPosition();
    }, this.openDelay);
  }

  hideTooltip() {
    setTimeout(() => {
      this.tooltipVisible = false;
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
      this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
    }, this.closeDelay);
  }

  toggleTooltip() {
    if (this.tooltipVisible) {
      this.hideTooltip();
    } else {
      this.showTooltip();
    }
  }
}
