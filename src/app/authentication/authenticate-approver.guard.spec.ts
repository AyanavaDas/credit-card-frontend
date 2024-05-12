import { TestBed } from '@angular/core/testing';

import { AuthenticateApproverGuard } from './authenticate-approver.guard';

describe('AuthenticateApproverGuard', () => {
  let guard: AuthenticateApproverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateApproverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
