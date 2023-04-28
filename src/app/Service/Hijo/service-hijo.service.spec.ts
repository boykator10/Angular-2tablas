import { TestBed } from '@angular/core/testing';

import { ServiceHijoService } from './service-hijo.service';

describe('ServiceHijoService', () => {
  let service: ServiceHijoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHijoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
