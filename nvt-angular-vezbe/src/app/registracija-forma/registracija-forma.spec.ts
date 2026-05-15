import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaForma } from './registracija-forma';

describe('RegistracijaForma', () => {
  let component: RegistracijaForma;
  let fixture: ComponentFixture<RegistracijaForma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistracijaForma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistracijaForma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
