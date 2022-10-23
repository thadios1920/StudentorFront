import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemandeComponent } from './service-demande.component';

describe('ServiceDemandeComponent', () => {
  let component: ServiceDemandeComponent;
  let fixture: ComponentFixture<ServiceDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
