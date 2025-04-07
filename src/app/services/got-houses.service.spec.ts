import { TestBed } from '@angular/core/testing';

import { GotHousesService } from './got-houses.service';

describe('GotHousesService', () => {
  let service: GotHousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotHousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
