import { TestBed } from '@angular/core/testing';

import { BeneficiareService } from './beneficiare.service';

describe('BeneficiareService', () => {
  let service: BeneficiareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
