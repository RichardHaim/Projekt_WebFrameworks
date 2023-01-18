import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerkaufCardComponent } from './verkauf-card.component';

describe('VerkaufCardComponent', () => {
  let component: VerkaufCardComponent;
  let fixture: ComponentFixture<VerkaufCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerkaufCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerkaufCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
