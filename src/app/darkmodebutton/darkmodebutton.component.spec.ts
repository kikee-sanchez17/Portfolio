import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodebuttonComponent } from './darkmodebutton.component';

describe('DarkmodebuttonComponent', () => {
  let component: DarkmodebuttonComponent;
  let fixture: ComponentFixture<DarkmodebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkmodebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkmodebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
