import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchhaltungCardComponent } from './buchhaltung-card.component';

describe('BuchhaltungCardComponent', () => {
  let component: BuchhaltungCardComponent;
  let fixture: ComponentFixture<BuchhaltungCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchhaltungCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuchhaltungCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
