import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttmTooltipComponent } from './uttm-tooltip.component';

describe('UttmTooltipComponent', () => {
  let component: UttmTooltipComponent;
  let fixture: ComponentFixture<UttmTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttmTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UttmTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
