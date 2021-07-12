import { TestBed } from '@angular/core/testing';

import { MathexpService } from './mathexp.service';

describe('MathexpService', () => {
  let service: MathexpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathexpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
