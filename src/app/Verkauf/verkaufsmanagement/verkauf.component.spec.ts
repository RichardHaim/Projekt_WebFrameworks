import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerkaufsmanagementComponent } from './verkauf.component';

describe('VerkaufsmanagementComponent', () => {
  let component: VerkaufsmanagementComponent;
  let fixture: ComponentFixture<VerkaufsmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerkaufsmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerkaufsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
