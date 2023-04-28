import { TestBed } from '@angular/core/testing';

import { ServicePadreService } from './service-padre.service';

describe('ServicePadreService', () => {
  let service: ServicePadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
