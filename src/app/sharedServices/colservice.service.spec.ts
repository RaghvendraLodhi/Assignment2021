import { TestBed } from '@angular/core/testing';

import { ColserviceService } from './colservice.service';

describe('ColserviceService', () => {
  let service: ColserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
