import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttmIconComponent } from './uttm-icon.component';

describe('UttmIconComponent', () => {
  let component: UttmIconComponent;
  let fixture: ComponentFixture<UttmIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttmIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UttmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
