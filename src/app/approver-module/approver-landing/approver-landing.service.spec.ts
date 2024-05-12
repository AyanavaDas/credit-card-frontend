import { TestBed } from '@angular/core/testing';

import { ApproverLandingService } from './approver-landing.service';

describe('ApproverLandingService', () => {
  let service: ApproverLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproverLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
