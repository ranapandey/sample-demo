import { TestBed } from '@angular/core/testing';

import { CommondDataService } from './commond-data.service';

describe('CommondDataService', () => {
  let service: CommondDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommondDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
