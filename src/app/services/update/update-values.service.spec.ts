import { TestBed } from '@angular/core/testing';

import { UpdateValuesService } from './update-values.service';

describe('UpdateValuesService', () => {
  let service: UpdateValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
