import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufCardComponent } from './einkauf-card.component';

describe('EinkaufCardComponent', () => {
  let component: EinkaufCardComponent;
  let fixture: ComponentFixture<EinkaufCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinkaufCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
