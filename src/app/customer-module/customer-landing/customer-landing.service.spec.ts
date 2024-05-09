import { TestBed } from '@angular/core/testing';

import { CustomerLandingService } from './customer-landing.service';

describe('CustomerLandingService', () => {
  let service: CustomerLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
