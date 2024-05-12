import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverLandingComponent } from './approver-landing.component';

describe('ApproverLandingComponent', () => {
  let component: ApproverLandingComponent;
  let fixture: ComponentFixture<ApproverLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
