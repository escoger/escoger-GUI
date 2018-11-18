import { TestBed } from '@angular/core/testing';

import { ElectronicDetailService } from './electronic-detail.service';

describe('ElectronicDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronicDetailService = TestBed.get(ElectronicDetailService);
    expect(service).toBeTruthy();
  });
});
