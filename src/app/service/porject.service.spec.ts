import { TestBed } from '@angular/core/testing';

import { PorjectService } from './porject.service';

describe('PorjectService', () => {
  let service: PorjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
