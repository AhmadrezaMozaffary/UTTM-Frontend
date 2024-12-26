import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHostComponent } from './s-host.component';

describe('SHostComponent', () => {
  let component: SHostComponent;
  let fixture: ComponentFixture<SHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
