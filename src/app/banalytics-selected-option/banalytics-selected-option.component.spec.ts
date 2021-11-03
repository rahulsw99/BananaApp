import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanalyticsSelectedOptionComponent } from './banalytics-selected-option.component';

describe('BanalyticsSelectedOptionComponent', () => {
  let component: BanalyticsSelectedOptionComponent;
  let fixture: ComponentFixture<BanalyticsSelectedOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanalyticsSelectedOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanalyticsSelectedOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
