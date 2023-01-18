import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufComponent } from './Einkauf.component';

describe('CarsSearchComponent', () => {
  let component: EinkaufComponent;
  let fixture: ComponentFixture<EinkaufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinkaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
