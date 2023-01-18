import { TestBed } from '@angular/core/testing';

import { EinkaufService } from './Einkauf.service';

describe('EinkaufService', () => {
  let service: EinkaufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinkaufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
