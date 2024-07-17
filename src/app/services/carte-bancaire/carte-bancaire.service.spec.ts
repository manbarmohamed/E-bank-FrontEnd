import { TestBed } from '@angular/core/testing';

import { CarteBancaireService } from './carte-bancaire.service';

describe('CarteBancaireService', () => {
  let service: CarteBancaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteBancaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
