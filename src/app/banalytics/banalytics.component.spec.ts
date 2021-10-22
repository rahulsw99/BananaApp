import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanalyticsComponent } from './banalytics.component';

describe('BanalyticsComponent', () => {
  let component: BanalyticsComponent;
  let fixture: ComponentFixture<BanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
