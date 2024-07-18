import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiareListComponent } from './beneficiare-list.component';

describe('BeneficiareListComponent', () => {
  let component: BeneficiareListComponent;
  let fixture: ComponentFixture<BeneficiareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiareListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
