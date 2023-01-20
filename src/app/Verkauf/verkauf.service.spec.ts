import { TestBed } from '@angular/core/testing';

import { VerkaufService } from './verkauf.service';

describe('VerkaufService', () => {
  let service: VerkaufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerkaufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
