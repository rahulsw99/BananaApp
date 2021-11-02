import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanalyticsIndividualComponent } from './banalytics-individual.component';

describe('BanalyticsIndividualComponent', () => {
  let component: BanalyticsIndividualComponent;
  let fixture: ComponentFixture<BanalyticsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanalyticsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanalyticsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
