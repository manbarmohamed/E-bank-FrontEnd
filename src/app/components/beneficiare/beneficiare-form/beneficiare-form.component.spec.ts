import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiareFormComponent } from './beneficiare-form.component';

describe('BeneficiareFormComponent', () => {
  let component: BeneficiareFormComponent;
  let fixture: ComponentFixture<BeneficiareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiareFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
