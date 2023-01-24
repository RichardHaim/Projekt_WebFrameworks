import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerkaufComponent } from 'c:/Users/kakic/Documents/WebFrameworksProjekt/Projekt_WebFrameworks/src/app/Verkauf/verkaufsmanagement/verkauf.component';

describe('VerkaufsmanagementComponent', () => {
  let component: VerkaufComponent;
  let fixture: ComponentFixture<VerkaufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerkaufComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerkaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
