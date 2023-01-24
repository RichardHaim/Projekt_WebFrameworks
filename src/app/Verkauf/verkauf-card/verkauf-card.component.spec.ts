import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verkaufCardComponent } from 'c:/Users/kakic/Documents/WebFrameworksProjekt/Projekt_WebFrameworks/src/app/Verkauf/verkauf-card/verkauf-card.component';

describe('VerkaufCardComponent', () => {
  let component: verkaufCardComponent;
  let fixture: ComponentFixture<verkaufCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ verkaufCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(verkaufCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
