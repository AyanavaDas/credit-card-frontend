import { TestBed } from '@angular/core/testing';

import { CustomerApplicationsService } from './customer-applications.service';

describe('CustomerApplicationsService', () => {
  let service: CustomerApplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerApplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
