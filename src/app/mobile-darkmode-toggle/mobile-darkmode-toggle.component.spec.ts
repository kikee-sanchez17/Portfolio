import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDarkmodeToggleComponent } from './mobile-darkmode-toggle.component';

describe('MobileDarkmodeToggleComponent', () => {
  let component: MobileDarkmodeToggleComponent;
  let fixture: ComponentFixture<MobileDarkmodeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDarkmodeToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileDarkmodeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
