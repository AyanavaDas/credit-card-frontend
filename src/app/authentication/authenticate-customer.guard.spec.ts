import { TestBed } from '@angular/core/testing';

import { AuthenticateCustomerGuard } from './authenticate-customer.guard';

describe('AuthenticateCustomerGuard', () => {
  let guard: AuthenticateCustomerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateCustomerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
