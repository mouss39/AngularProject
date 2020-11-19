import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTelNumberComponent } from './change-tel-number.component';

describe('ChangeTelNumberComponent', () => {
  let component: ChangeTelNumberComponent;
  let fixture: ComponentFixture<ChangeTelNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTelNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTelNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
